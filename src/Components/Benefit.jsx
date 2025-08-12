import React from 'react'
import './Benefit.css'
import smartimg from "../assets/Smart & Personal Response.png"
import queryimg from "../assets/Icon (4).png"
import query1img from "../assets/Icon (5).png"
import query2img from "../assets/Icon (6).png"
import query3img from "../assets/Icon (7).png"
import moreimg from "../assets/Vector (20).png"

const Benefit = () => {
  return (
    <div className='benefit__section'>
        <div className="upper__benefit__content">
                <div className="btn">
                        <button className='smart-btn'>Smart, Sacalble, Effective</button>
                </div>
                <div className="main-title">Key Benefits of <br /> Conversational AI</div>
        </div>
        <div className="lower__benefit__content">
                <div className="lower__content__img"><img src={smartimg} alt="" /></div>
                <div className="customer__section">
                    <div className="query__btns">
                            <div className="first_query_btn">
                                <div className="btn_img"><img src={queryimg} alt="" /></div>
                                <div className="btn_text">Increased Customer <br />Satisfaction</div>
                            </div>
                              <div className="first_query_btn">
                                <div className="btn_img"><img src={query1img} alt="" /></div>
                                <div className="btn_text">High Operational Efficiency</div>
                            </div>
                              <div className="first_query_btn">
                                <div className="btn_img"><img src={query2img} alt="" /></div>
                                <div className="btn_text">24/7 Nonstop Service</div>
                            </div>
                              <div className="first_query_btn">
                                <div className="btn_img"><img src={query3img} alt="" /></div>
                                <div className="btn_text">Scalability at No Additional Cost</div>
                            </div>
                    </div>
                    <div className="know__more__container">
                            <div className="text__line">Harness the power of AI to create smarter, more responsive, and more cost-effective customer experiences in the long run.</div>
                            <div className="more__img"><img src={moreimg} alt="" /></div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Benefit
