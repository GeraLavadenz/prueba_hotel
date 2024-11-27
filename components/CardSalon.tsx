import './CardSalones.css';
import React from 'react';

interface SalonProps {
  salon: {
    id: string;
    name: string;
    image: string;
    description: string;
  };
}

const CardSalon = ({ salon }: SalonProps) => {
  return (
    <section className="mosaico">
        <div className="card">
          <img src={salon.image} alt={salon.name} />
          <div className="descript">
            <p>{salon.name}</p>
            <button>
              <img src="/icon/botnondesplegable.svg" alt="" />
            </button>
          </div>
          <div className="descripcion">
            <img src={salon.description} alt={salon.name} />
          </div>
        </div>
    </section>
  )
}

export default CardSalon