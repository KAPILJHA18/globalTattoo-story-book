import React from 'react';
import './navigation-bar.css';

type NavId = 'home' | 'bookings' | 'chat' | 'profile';

type NavigationBarProps = {
  activeId: NavId;
  onChange?: (id: NavId) => void;
};

export const NavigationBar: React.FC<NavigationBarProps> = ({
  activeId,
  onChange,
}) => {
  const handleClick = (id: NavId) => {
    onChange?.(id);
  };

  return (
    <nav className="nb-root">
      {/* Curved background */}
      {/* <div className="nb-curve" /> */}

      {/* Tabs */}
      <div className="nb-tabs-container">
        <div className="nb-tabs nb-left-tabs">
          <button
            type="button"
            className={`nb-tab ${activeId === 'home' ? 'nb-tab--active' : ''}`}
            onClick={() => handleClick('home')}
            style={{ width: '50px' }}
          >
            <span className="nb-tab__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 20.9995V12.9995C15 12.7343 14.8946 12.4799 14.7071 12.2924C14.5196 12.1049 14.2652 11.9995 14 11.9995H10C9.73478 11.9995 9.48043 12.1049 9.29289 12.2924C9.10536 12.4799 9 12.7343 9 12.9995V20.9995M3 9.99948C2.99993 9.70855 3.06333 9.4211 3.18579 9.1572C3.30824 8.89329 3.4868 8.65928 3.709 8.47148L10.709 2.47248C11.07 2.16739 11.5274 2 12 2C12.4726 2 12.93 2.16739 13.291 2.47248L20.291 8.47148C20.5132 8.65928 20.6918 8.89329 20.8142 9.1572C20.9367 9.4211 21.0001 9.70855 21 9.99948V18.9995C21 19.5299 20.7893 20.0386 20.4142 20.4137C20.0391 20.7888 19.5304 20.9995 19 20.9995H5C4.46957 20.9995 3.96086 20.7888 3.58579 20.4137C3.21071 20.0386 3 19.5299 3 18.9995V9.99948Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg></span>
            <span className="nb-tab__label">Home</span>
          </button>

          <button
            type="button"
            className={`nb-tab ${activeId === 'bookings' ? 'nb-tab--active' : ''}`}
            onClick={() => handleClick('bookings')}
            style={{ width: '50px' }}
          >
            <span className="nb-tab__icon"><svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 2V6M16 2V6M3 10H21M9 16L11 18L15 14M5 4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg></span>
            <span className="nb-tab__label">Bookings</span>
          </button>
        </div>
        {/* Spacer for center FAB */}
        <div className="nb-spacer" />
        <div className="nb-tabs nb-right-tabs">

          <button
            type="button"
            className={`nb-tab ${activeId === 'chat' ? 'nb-tab--active' : ''}`}
            onClick={() => handleClick('chat')}
            style={{ width: '50px' }}
          >
            <span className="nb-tab__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 12H8.01M12 12H12.01M16 12H16.01M7.9 20C9.80858 20.9791 12.0041 21.2443 14.0909 20.7478C16.1777 20.2514 18.0186 19.0259 19.2818 17.2922C20.545 15.5586 21.1474 13.4308 20.9806 11.2922C20.8137 9.15366 19.8886 7.14502 18.3718 5.62824C16.855 4.11146 14.8464 3.1863 12.7078 3.01946C10.5693 2.85263 8.44147 3.45509 6.70782 4.71829C4.97417 5.98149 3.74869 7.82236 3.25222 9.90916C2.75575 11.996 3.02094 14.1915 4 16.1L2 22L7.9 20Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg></span>
            <span className="nb-tab__label">Chat</span>
          </button>

          <button
            type="button"
            className={`nb-tab ${activeId === 'profile' ? 'nb-tab--active' : ''}`}
            onClick={() => handleClick('profile')}
            style={{ width: '50px' }}
          >
            <span className="nb-tab__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 21V19C19 17.9391 18.5786 16.9217 17.8284 16.1716C17.0783 15.4214 16.0609 15 15 15H9C7.93913 15 6.92172 15.4214 6.17157 16.1716C5.42143 16.9217 5 17.9391 5 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg></span>
            <span className="nb-tab__label">Profile</span>
          </button>
        </div>
      </div>

      {/* Center FAB */}
      <button type="button" className="nb-fab" aria-label="Add">
        <span className="nb-fab__plus"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 12H16M12 8V16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        </span>
      </button>
    </nav>
  );
};
