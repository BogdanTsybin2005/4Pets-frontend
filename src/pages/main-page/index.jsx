import './style.css';
import Main4PetsArrow from '../../svg_pictures/4pets-arrow-to-main-title';
import Section from '../../components/section';



export default function MainPage() {
    return <div className="main__page-body">
        <div className="main__start-screen">
            <div className="main__start-context">
                <div className="main__start-title-context">
                    <div className='main__bishkek-access'>
                        <p>ДОСТУПНО В БИШКЕКЕ</p>
                        <span>
                            <Main4PetsArrow/>
                        </span>
                    </div>
                    <h1>
                        <div>
                            <div className='_4Petst--purple-text'>
                                4Pets
                            </div> – онлайн-
                        </div> 
                            пространство для общения, заботы и помощи <div className='_4Petst--purple-text'>питомцам</div>
                    </h1>
                </div>
                <div className="main__start-image">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL5lkD-vMcSbKV1dek1EBuzRzbN2oiELkWCg&s" alt="img" />
                </div>
            </div>
            <div className="main-aside-decor"></div>
        </div>
        <Section option={1}/>
        <Section option={2}/>
    </div>
}
