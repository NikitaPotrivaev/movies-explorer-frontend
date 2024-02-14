import './NavTab.css';

export function NavTab() {
    return (
      <nav className='nav'>
            <a href='#about' className='nav__button'
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('about');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >О проекте</a>
            <a href='#techs' className='nav__button'
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('techs');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
            >Технологии</a>
            <a href='#student' className='nav__button'
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('student');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >Студент</a>
        </nav>
    )
}