import React from "react";

import '../../css/about.css'

const ContactComp = () => {

    return (
        <div className="menu-content">
            <div className='title font-large'>
                About Me
            </div>
            <div className="content-box">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam qui
             itaque soluta cumque beatae vel sunt neque expedita consectetur.
             Cupiditate quisquam provident molestias odio! Consectetur a voluptates 
             voluptate nostrum illo sunt quia eum non earum ipsam, nihil dolorem porro 
             quas pariatur aliquid labore minus quidem ut! Nisi ab accusantium eveniet illo
              cum maxime, harum ipsum iusto? Ea mollitia aut ipsa sunt cumque possimus
               iure in aspernatur? Illum sunt eum necessitatibus, maiores unde, magni 
               maxime vitae doloremque placeat praesentium dicta totam laudantium molestias
                repellat at laboriosam nostrum enim aut dolore excepturi. Ducimus veniam aut
                 saepe maxime possimus debitis non perferendis eaque minima voluptatum, aliquid
                  quo nulla, dolore reprehenderit. Doloribus aspernatur cum tempore quia cumque 
                  totam optio magnam debitis rerum mollitia, eos commodi praesentium cupiditate quis
                   ex odio! Ad incidunt, error quo numquam dolor veniam voluptatem rem enim 
                   debitis impedit minima quis blanditiis. Eum exercitationem incidunt cupiditate
                    tempore obcaecati omnis hic. Distinctio ipsa, facilis ipsam fugiat quis perferendis
                     quibusdam accusantium recusandae reiciendis veritatis consequatur omnis amet sit 
                     optio saepe. Est vel illo earum, qui distinctio reiciendis veniam facere
                      quos nemo, eius quae quibusdam sunt explicabo architecto? Eius sequi,
                       aliquid est, reiciendis amet, dolorem nam blanditiis voluptatum aspernatur
                        obcaecati impedit aperiam qui ducimus!
            </div>
            <div className='title font-large'>
                Contact Me
            </div>
            <div className="contact-content">
                <div id='twitter' onClick={() => window.open('https://www.twitter.com', '_blank')}></div>
                <div id='instagram' onClick={() => window.open('https://www.instagram.com', '_blank')}></div>
                <div id="facebook" onClick={() => window.open('https://www.facebook.com', '_blank')}></div>
            </div>
        </div>
    )
}

export default ContactComp