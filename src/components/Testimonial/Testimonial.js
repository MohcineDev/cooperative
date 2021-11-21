import React, { useEffect } from 'react'
import OneTes from './OneTes'
import data from './data.json'
import {TestimonialSection , HeadingH2, Desc,Container, Wrapper, PrevBtn, NextBtn} from './style'

function Testimonial() {

    useEffect(() => {
        let i = 1
        let btns = document.querySelectorAll('.btn')
        let wrapper = document.querySelector('.tes_wrapper')
        let testimonials = document.querySelectorAll('.tes_wrapper>div')

        const move = (e) => {
            wrapper.style.transition = 'transform 0.7s';
            wrapper.style.transform = `translateX(calc(-300px * ${i}))`
            e.target.disabled = true
        }

        const slide = (e) => {
            if (e.target.id === "next") {
                i++
                move(e)
            }
            else {
                i--
                move(e)
            }
        }

        wrapper.addEventListener('transitionend', () => {
            if (testimonials[i].id === "f") {
                btns[0].style.display = 'none'
            }
            //if we reached the last testimonial
            else if (testimonials[i + 1].id === "l") {
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
        <TestimonialSection className="testimonial">
            <HeadingH2>Testimonials</HeadingH2>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non explicabo harum, dicta error earum tempore aliquid, necessitatibus dolor, sit blanditiis molestiae dolorem cumque odit. Non sit repellendus explicabo dignissimos ratione?</Desc>
            <Container className="container">
                <Wrapper className="tes_wrapper">
                    {
                        data.map(item =>
                            <OneTes key={item.id}
                                divId={item.divId}
                                img={item.img}
                                name={item.name}
                                tagname={item.tagname}
                                testimonial={item.testimonial} />
                        )
                    }
                </Wrapper>
                <PrevBtn className="btn" id="prev"></PrevBtn>
                <NextBtn className="btn" id="next"></NextBtn>
            </Container>
        </TestimonialSection>
    )
}

export default Testimonial