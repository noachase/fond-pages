/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import React from 'react';
import classes from './Nav.module.scss';
import { NavLink } from 'react-router-dom';
import Toggle from '../../Common/Preloader/Toggle/Toggle';
import { setNarcoticAC } from '../../redux/narcotics-reducer';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';



class Nav extends React.Component {
  // componentDidMount() {                                                //! NOT WORKING
  //     console.log('this', this);
  //     console.log('dik: ', Object.values(this.props.store));
  //     this.navs = Object.values(this.props.store).map( n =>
  //         ( <div className={`${classes.itemNarko}`}>
  //             <NavLink 
  //                 to={`narcotics/${n.id}}`} 
  //                 onClick={() => { this.props.setNarcoticAC(`${n.id}`, n) }} 
  //                 activeClassName={classes.active}
  //             >
  //                 {`${n.name}`}
  //             </NavLink>
  //         </div>
  //         )
  //         )
  //         console.log(this.navs);
  // }
  render() {
    return (
      <nav className={classes.nav}>
        <div className={`${classes.item} ${classes.active}`}>
          <NavLink to="/main" onClick={() => { this.props.setNarcoticAC('FAQ', this.props.store.FAQ); }} activeClassName={classes.active}>Головна</NavLink>
        </div>
        <div className={`${classes.item} ${classes.active}`}>
          <NavLink to="/book-a-lecture" onClick={() => { this.props.setNarcoticAC("BookLecture", this.props.store.BookLecture); }} activeClassName={classes.active}>Замовити&nbsp;лекцію</NavLink>
        </div>
        <div className={`${classes.item} ${classes.active}`}>
          <NavLink to="/get-consultation" onClick={() => { this.props.setNarcoticAC("Consult", this.props.store.Consult); }} activeClassName={classes.active}>Отримати&nbsp;консультацію</NavLink>
        </div>
        <div className={`${classes.item} ${classes.active}`}>
          <NavLink to="/faq" onClick={() => { this.props.setNarcoticAC("FAQ", this.props.store.FAQ); }} activeClassName={classes.active}>Поширені&nbsp;запитання</NavLink>
        </div>
        <Toggle render={({ on, Toggle }) => (
          <div className={classes.item}>
            {/* <button onClickCapture>k</button> */}
            <div className={classes.item}>
              <a onClick={Toggle} href="#" className={classes.active}>Правда&nbsp;про&nbsp;наркотики</a>
            </div>
            {
              on &&
              <div className={classes.item}>
                <div className={`${classes.itemNarko}`}>
                  <NavLink to="/narcotics/narcotics" onClick={() => { this.props.setNarcoticAC("Narcotics", this.props.store.Narcotics); }} activeClassName={classes.active}>Дія&nbsp;наркотиків</NavLink>
                </div>
                <div className={`${classes.itemNarko}`}>
                  <NavLink to="/narcotics/konopli" onClick={() => { this.props.setNarcoticAC("Konopli", this.props.store.Konopli); }} activeClassName={classes.active}>Коноплі</NavLink>
                </div>
                <div className={`${classes.itemNarko}`}>
                  <NavLink to="/narcotics/opium" onClick={() => { this.props.setNarcoticAC("Opium", this.props.store.Opium); }} activeClassName={classes.active}>Опіум</NavLink>
                </div>
                <div className={`${classes.itemNarko}`}>
                  <NavLink to="/narcotics/barbiturati" onClick={() => { this.props.setNarcoticAC("Barbiturati", this.props.store.Barbiturati); }} activeClassName={classes.active}>Барбітурати</NavLink>
                </div>
                <div className={`${classes.itemNarko}`}>
                  <NavLink to="/narcotics/salt" onClick={() => { this.props.setNarcoticAC("Salt", this.props.store.Salt); }} activeClassName={classes.active}>Сіль</NavLink>
                </div>
                <div className={`${classes.itemNarko}`}>
                  <NavLink to="/narcotics/lsd" onClick={() => { this.props.setNarcoticAC("Lsd", this.props.store.Lsd); }} activeClassName={classes.active}>ЛСД</NavLink>
                </div>
                <div className={`${classes.itemNarko}`}>
                  <NavLink to="/narcotics/cocaine" onClick={() => { this.props.setNarcoticAC("Cocaine", this.props.store.Cocaine); }} activeClassName={classes.active}>КокаЇн</NavLink>
                </div>
                <div className={`${classes.itemNarko}`}>
                  <NavLink to="/narcotics/heroine" onClick={() => { this.props.setNarcoticAC("Heroine", this.props.store.Heroine); }} activeClassName={classes.active}>Героїн</NavLink>
                </div>
                <div className={`${classes.itemNarko}`}>
                  <NavLink to="/narcotics/ketamine" onClick={() => { this.props.setNarcoticAC("Ketamine", this.props.store.Ketamine); }} activeClassName={classes.active}>Кетамін</NavLink>
                </div>
                <div className={`${classes.itemNarko}`}>
                  <NavLink to="/narcotics/durman" onClick={() => { this.props.setNarcoticAC("Durman", this.props.store.Durman); }} activeClassName={classes.active}>Дурман</NavLink>
                </div>
                <div className={`${classes.itemNarko}`}>
                  <NavLink to="/narcotics/dmaa" onClick={() => { this.props.setNarcoticAC("DMAA", this.props.store.DMAA); }} activeClassName={classes.active}>DMAA</NavLink>
                </div>
                <div className={`${classes.itemNarko}`}>
                  <NavLink to="/narcotics/mdma" onClick={() => { this.props.setNarcoticAC("MDMA", this.props.store.MDMA); }} activeClassName={classes.active}>MDMA Екстазі</NavLink>
                </div>
                <div className={`${classes.itemNarko}`}>
                  <NavLink to="/narcotics/alcohol" onClick={() => { this.props.setNarcoticAC("Alcohol", this.props.store.Alcohol); }} activeClassName={classes.active}>Алкоголь</NavLink>
                </div>
                <div className={`${classes.itemNarko}`}>
                  <NavLink to="/narcotics/tramadol" onClick={() => { this.props.setNarcoticAC("Tramadol", this.props.store.Tramadol); }} activeClassName={classes.active}>Трамадол</NavLink>
                </div>
                <div className={`${classes.itemNarko}`}>
                  <NavLink to="/narcotics/toxicomany" onClick={() => { this.props.setNarcoticAC("Toxic", this.props.store.Toxic); }} activeClassName={classes.active}>Токсикоманія</NavLink>
                </div>
                <div className={`${classes.itemNarko}`}>
                  <NavLink to="/narcotics/ephedrin" onClick={() => { this.props.setNarcoticAC("Ephedrin", this.props.store.Ephedrin); }} activeClassName={classes.active}>Ефедрин</NavLink>
                </div>
                <div className={`${classes.itemNarko}`}>
                  <NavLink to="/narcotics/morphine" onClick={() => { this.props.setNarcoticAC("Morphine", this.props.store.Morphine); }} activeClassName={classes.active}>Морфін</NavLink>
                </div>
                <div className={`${classes.itemNarko}`}>
                  <NavLink to="/narcotics/mak-snodiyniy" onClick={() => { this.props.setNarcoticAC("Poppy", this.props.store.Poppy); }} activeClassName={classes.active}>Мак снодійний</NavLink>
                </div>
                <div className={`${classes.itemNarko}`}>
                  <NavLink to="/narcotics/pervitin" onClick={() => { this.props.setNarcoticAC("Pervitin", this.props.store.Pervitin); }} activeClassName={classes.active}>Первітин</NavLink>
                </div>
                <div className={`${classes.itemNarko}`}>
                  <NavLink to="/narcotics/meskalin" onClick={() => { this.props.setNarcoticAC("Meskalin", this.props.store.Meskalin); }} activeClassName={classes.active}>Мескалін</NavLink>
                </div>
                <div className={`${classes.itemNarko}`}>
                  <NavLink to="/narcotics/psylocibe" onClick={() => { this.props.setNarcoticAC("Psylocibe", this.props.store.Psylocibe); }} activeClassName={classes.active}>Псилоцибін</NavLink>
                </div>
                <div className={`${classes.itemNarko}`}>
                  <NavLink to="/narcotics/fenciklidin" onClick={() => { this.props.setNarcoticAC("Fen", this.props.store.Fen); }} activeClassName={classes.active}>Фенциклідин</NavLink>
                </div>
                <div className={`${classes.itemNarko}`}>
                  <NavLink to="/narcotics/codeine" onClick={() => { this.props.setNarcoticAC("Codeine", this.props.store.Codeine); }} activeClassName={classes.active}>Кодеїн</NavLink>
                </div>
                <div className={`${classes.itemNarko}`}>
                  <NavLink to="/narcotics/methadone" onClick={() => { this.props.setNarcoticAC("Methadone", this.props.store.Methadone); }} activeClassName={classes.active}>Метадон</NavLink>
                </div>

                {/* {this.navs} */}

              </div>
            }
          </div>
        )}
        />
        <br />
      </nav>
    );
  }
}

// export default Nav;

let mapStateToProps = (state) => ({
  state: state
});

Nav.propTypes = {
  setNarcoticAC: PropTypes.func,
  store: PropTypes.object,

};

export default connect(mapStateToProps, { setNarcoticAC })(Nav);