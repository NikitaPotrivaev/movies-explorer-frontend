import './BurgerMenu.css';
import { useEffect } from 'react';
import cross from '../../images/Group.svg';
import { Link } from 'react-router-dom';
import { AccountButton } from '../AccountButton/AccountButton';

export function BurgerMenu({ isOpen, handleClick, onClose }) {
    useEffect(() => {
        if (!isOpen) return;
        
        function handleESC(e) {
          if (e.key === "Escape") {
            onClose()
          }
        }
        document.addEventListener("keydown", handleESC);
    
        return () => document.removeEventListener("keydown", handleESC);
      }, [isOpen, onClose]);
    
    const handleOverlayClose = (e) => {
        if (e.target === e.currentTarget && isOpen) {
          onClose();
        }
    }

    return (
        <>
            <div className={isOpen ? ''}>
            </div>
        </>
    )
}