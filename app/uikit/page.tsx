import Link from "next/link"
import "./styles.scss"

import logo from "@/public/logo.svg"
import mailIcon from "@/public/menu/mail.svg"
import phoneIcon from "@/public/menu/phone.svg"
import clockIcon from "@/public/menu/clock.svg"
import questionIcon from "@/public/question.svg"
import Image from "next/image"
import CustomRadio from "../components/CustomRadio"

// import { RadioTile, RadioTileGroup, useMediaQuery } from 'rsuite';
// import { Icon } from '@rsuite/icons';
// import { VscLock, VscWorkspaceTrusted, VscRepo } from 'react-icons/vsc';


const UIKit = () => {

  const rootClass = `opt-fap`;
  // const [isInline] = useMediaQuery('xl'); 


  return (
    <div className="ui-kit">
      <div className="content-grid">
        <Image src={logo} width={86} height={80} alt={`Logo`} />
        <h1>UI Kit (H1 Title)</h1>
        <h2>Заголовок H2</h2>
        <h3>Заголовок H3</h3>

        <form action="">
          <div className={`${rootClass}-calculator-parameter`}>
            <h3 className={`${rootClass}-calculator-parameter__title`}>Формат печати</h3>
            <div className={`${rootClass}-radio-row`}>
              <CustomRadio name="print" value={"500x700"} />
              <CustomRadio name="print" value={"520x720"} />
              <CustomRadio name="print" value={"385x425"} />
              <CustomRadio name="print" value={"500x700"} />
              <CustomRadio name="print" value={"520x720"} />
              <CustomRadio name="print" value={"385x425"} />
              <CustomRadio name="print" value={"500x700"} />
              <CustomRadio name="print" value={"520x720"} />
              <CustomRadio name="print" value={"385x425"} />
            </div>
          </div>
          
        </form>



        {/* <form action="" method="post">
        <RadioTileGroup  inline={isInline} defaultValue="private" aria-label="Visibility Level">
          <RadioTile label="Private" value="private"></RadioTile>
          <RadioTile label="Internal" value="internal"></RadioTile>
          <RadioTile label="Public" value="public"></RadioTile>
        </RadioTileGroup>
        </form> */}

        <ul className={`${rootClass}-menu-items`}>
          <li>
            <Link href={`/`}>О нас</Link>
          </li>
          <li>
            <Link href={`/`}>Помощь</Link>
          </li>
          <li>
            <Link href={`/`}>Контакты</Link>
          </li>
          <li>
            <Link href={`/`}>Новости</Link>
          </li>
        </ul>
        <ul className={`${rootClass}-menu-items`}>
          <li>
            <input hidden id="profile" type="checkbox" />
            <label htmlFor="profile">Профиль</label>
            <ul className={`${rootClass}-menu-items-dropdown`}>
                <li>
                    <Link href={`/profile`}>Личные данные</Link>
                </li>
                <li>
                    <Link href={`/`}>Заказы</Link>
                </li>
                <li>
                    <Link href={`/`}>Данные компании</Link>
                </li>
                <li>
                    <Link href={`/logout`}>Выйти</Link>
                </li>
            </ul>
          </li>
          <li>
            <Link href={`/`}>Заказы</Link>
          </li>
          <li>
            <Link href={`/`}>Корзина</Link>
          </li>
        </ul>
        <ul className={`${rootClass}-menu-items`}>
          <li>
            <Image
              src={mailIcon}
              width={13}
              height={10}
              alt={`Email`}
            />
            <Link href={`mailto:support@fineart-print.ru`}>support@fineart-print.ru</Link>
          </li>
          <li>
            <Image
              src={phoneIcon}
              width={10}
              height={10}
              alt={`Phone`}
            />
            <Link href={`tel:+74952150877`}>+7 (495) 215-08-77</Link>
          </li>
          <li>
            <Image
              src={clockIcon}
              width={10}
              height={10}
              alt={`Clock`}
            />
            <span>10:00-18:00 ПН-ПТ</span>
          </li>
        </ul>
        <nav className={`${rootClass}-main-nav`}>
          <ul>
            <li>
              <Link href={`/`}>Калькулятор</Link>
            </li>
            <li>
              <Link href={`/`}>Технические требования</Link>
            </li>
            <li>
              <Link href={`/`}>Доставка и оплата</Link>
            </li>
          </ul>
        </nav>
        <div className={`${rootClass}-buttons`}>
          <button className={`${rootClass}-button`}><span>Кнопка</span></button>
          <button className={`${rootClass}-button active`}><span>Кнопка (Активная)</span></button>
          <button className={`${rootClass}-button`} disabled><span>Кнопка (Отключена)</span></button>
          <button className={`${rootClass}-button`}>
            <Image
                className={`${rootClass}-button__hint-icon hint-open`}
                width={11}
                height={11}
                src={questionIcon}
                alt={`question`}
            />
            <span>Кнопка c подсказкой</span>
        </button>
        </div>

        <div className={`${rootClass}-buttons`}>
          <button className={`${rootClass}-submit`}>Оформить заказ</button>
        </div>
        
        <ul className={`${rootClass}-tags-list`}>
          <li className={`${rootClass}-tag ${rootClass}-tag--issued`}>Оформлен</li>
          <li className={`${rootClass}-tag ${rootClass}-tag--payed`}>Оплачен</li>
          <li className={`${rootClass}-tag ${rootClass}-tag--in-production`}>В производстве</li>
          <li className={`${rootClass}-tag ${rootClass}-tag--ready-for-pickup`}>Готов к выдаче</li>
          <li className={`${rootClass}-tag ${rootClass}-tag--in-delivery`}>В доставке</li>
          <li className={`${rootClass}-tag ${rootClass}-tag--received`}>Получен</li>
          <li className={`${rootClass}-tag ${rootClass}-tag--canceled`}>Отменен</li>
        </ul>

        <div className={`${rootClass}-pagination`}>
            <h3>Листы</h3>
            <ul>
            {[...Array(10)].map((x, i) =>
                <li key={i}>
                    <button className={`${rootClass}-button ${i === 0 && "active"}`}>{i}</button>
                </li>
            )}
                
            </ul>
        </div>

        <table className={`${rootClass}-table`}>
            <tbody>
                <tr>
                    <th>Параметр</th>
                    <th>Требуемый</th>
                    <th>В вашем файле</th>
                    <th>Статус</th>
                </tr>
                <tr>
                    <th>Формат файла</th>
                    <td>PDF</td>
                    <td>PDF</td>
                    <td className={`${rootClass}-table__status ${rootClass}-table__status--success`}>OK</td>
                </tr>
                <tr>
                    <th>Цветовое пространство</th>
                    <td>CMYK</td>
                    <td>CMYK</td>
                    <td className={`${rootClass}-table__status ${rootClass}-table__status--error`}>Ошибка</td>
                </tr>
            </tbody>

        </table>

        <p className="message message--error">Некоторые загруженные макеты не соотвествуют правилам формления</p>
        <div className="window-message window-message--warning">
            <p>Ставя галочку, я подтверждаю что: орфография и пунктуация текста верна; содержимое макета расположено верно.</p>
            <p>Я понимаю, что этот макет будет напечатан, КАК ОТОБРАЖЕНО ВЫШЕ (без вспомогательных линий), и что я не смогу внести в дальнейшем какие бы то ни были исправления в макет</p>
        </div>

      </div>
      <aside>

      </aside>
    </div>
  )
}

export default UIKit