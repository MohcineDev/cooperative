import React, { useEffect } from 'react'
import OneTes from './OneTes'
import './testimonial.css'
import data from './data.json'

function Testimonial() {

    useEffect(() => {
        let i = 1
        let btns = document.querySelectorAll('.btn')
        let wrapper = document.querySelector('.tes_wrapper')
        let a = document.querySelectorAll('.tes_wrapper>div')

        const move = (e) => {
            wrapper.style.transition = 'transform 0.7s';
            wrapper.style.transform = `translateX(calc(-300px * ${i}))`
            e.target.disabled = true
        }

        const slide = (e) => {
            console.log(e.target);
            if (e.target.id === "next") {
                i++
                move(e)
            }
            else {
                i--
                move(e)
            }
            console.log(i);
        }
        wrapper.addEventListener('transitionend', () => {
            console.log(wrapper);
            console.log(a[i]);
            if (a[i].id === "f") {
                btns[0].style.display = 'none'
            }
            else if (a[i + 2].id === "l") {
                btns[1].style.display = 'none'
            }
            else {
                btns[0].style.display = 'block'
                btns[1].style.display = 'block'
            }

            btns.forEach(btn => btn.disabled = false)
        })
        btns.forEach(btn => btn.addEventListener('click', slide))
    }, [])


    return (
        <div className="testimonial">
            <h2>Testimonials</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non explicabo harum, dicta error earum tempore aliquid, necessitatibus dolor, sit blanditiis molestiae dolorem cumque odit. Non sit repellendus explicabo dignissimos ratione?</p>
            <div className="container">
                <div className="tes_wrapper">
                    <OneTes divId={data[0].divId} img={data[0].img} name={data[0].name} tagname={data[0].tagname} testimonial={data[0].testimonial} />
                    <OneTes divId={data[1].divId} img={data[1].img} name={data[1].name} tagname={data[1].tagname} testimonial={data[1].testimonial} />
                    <OneTes divId={data[2].divId} img={data[2].img} name={data[2].name} tagname={data[2].tagname} testimonial={data[2].testimonial} />
                    <OneTes divId={data[3].divId} img={data[3].img} name={data[3].name} tagname={data[3].tagname} testimonial={data[3].testimonial} />
                    <OneTes divId={data[4].divId} img={data[4].img} name={data[4].name} tagname={data[4].tagname} testimonial={data[4].testimonial} />
                    <OneTes divId={data[5].divId} img={data[5].img} name={data[5].name} tagname={data[5].tagname} testimonial={data[5].testimonial} />
                    <OneTes divId={data[6].divId} img={data[6].img} name={data[6].name} tagname={data[6].tagname} testimonial={data[6].testimonial} />
                    <OneTes divId={data[7].divId} img={data[7].img} name={data[7].name} tagname={data[7].tagname} testimonial={data[7].testimonial} />
                    <OneTes divId={data[8].divId} img={data[8].img} name={data[8].name} tagname={data[8].tagname} testimonial={data[8].testimonial} />
                </div>
                <button className="btn" id="prev"></button>
                <button className="btn" id="next"></button>
            </div>
        </div>
    )
}

export default Testimonial
