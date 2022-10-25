import './sidebar.scss';
import { Close, Menu } from '@material-ui/icons';

import { Link } from 'react-router-dom';
import { useState } from 'react';

import { useContext } from 'react';
import { AuthContext } from '../../context/authContext/authContext';
import { LOGOUT } from '../../context/authContext/authContextActions';

import logo from '../../assets/img/logo-wight.png';

export default function Sidebar() {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const { dispatch } = useContext(AuthContext);

  return (
    <div className="sidebar">
      <div className="wrapper">
        <div className="logoContainer">
          <Link
            to={'/'}
            onClick={() => {
              setActive('home');
              setMenuOpen(false);
            }}
          >
            <img src={logo} alt="logo" className="logo" />
          </Link>
        </div>

        <Menu className="menu" onClick={() => setMenuOpen(true)} />

        <ul className={menuOpen ? 'list open' : 'list'}>
          <Close className="close" onClick={() => setMenuOpen(false)} />

          <Link to={'/billets'}>
            <li
              onClick={() => {
                setActive('bon');
                setMenuOpen(false);
              }}
              className={active === 'bon' && 'active'}
            >
              bon
            </li>
          </Link>
          <Link to={'/factures'}>
            <li
              onClick={() => {
                setActive('facture');
                setMenuOpen(false);
              }}
              className={active === 'facture' && 'active'}
            >
              facture
            </li>
          </Link>
          <Link to={'/commande'}>
            <li
              onClick={() => {
                setActive('commande');
                setMenuOpen(false);
              }}
              className={active === 'commande' && 'active'}
            >
              commande
            </li>
          </Link>
          <Link to={'/dépenses'}>
            <li
              onClick={() => {
                setActive('dépense');
                setMenuOpen(false);
              }}
              className={active === 'dépense' && 'active'}
            >
              dépense
            </li>
          </Link>
          <Link to={'/clients'}>
            <li
              onClick={() => {
                setActive('clients');
                setMenuOpen(false);
              }}
              className={active === 'clients' && 'active'}
            >
              clients
            </li>
          </Link>
          <Link to={'/employees'}>
            <li
              onClick={() => {
                setActive('employees');
                setMenuOpen(false);
              }}
              className={active === 'employees' && 'active'}
            >
              employees
            </li>
          </Link>
          <Link to={'/produits'}>
            <li
              onClick={() => {
                setActive('produit');
                setMenuOpen(false);
              }}
              className={active === 'produit' && 'active'}
            >
              produit
            </li>
          </Link>
          <Link to={'/returnedProducts'}>
            <li
              onClick={() => {
                setActive('retour');
                setMenuOpen(false);
              }}
              className={active === 'retour' && 'active'}
            >
              retour
            </li>
          </Link>

          <Link to={'/vers'}>
            <li
              onClick={() => {
                setActive('vers');
                setMenuOpen(false);
              }}
              className={active === 'vers' && 'active'}
            >
              vers
            </li>
          </Link>

          <li
            onClick={() => {
              dispatch(LOGOUT());
              setMenuOpen(false);
            }}
          >
            Déconnecter
          </li>
        </ul>
      </div>
    </div>
  );
}
