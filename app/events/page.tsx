'use client';
import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { fetchRevenue, fetchLatestInvoices, fetchCardData } from '@/app/lib/data';
import '@/app/ui/events/styles.css';
import '@/app/events/styles.css';
import { useState, useEffect } from 'react';

export default function Page() {
  const events = [
    {
      image: '/path/to/image1.jpg',
      description: 'Descrição do Evento 1'
    },
    {
      image: '/path/to/image2.jpg',
      description: 'Descrição do Evento 2'
    },
    {
      image: '/path/to/image3.jpg',
      description: 'Descrição do Evento 3'
    },
    {
      image: '/path/to/image4.jpg',
      description: 'Descrição do Evento 4'
    }
  ];

  const [currentEvent, setCurrentEvent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEvent((prevEvent) => (prevEvent + 1) % events.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [events.length]);

  return (
    <div>
      <header className="header">
        <div className="company-name">Mural de Eventos</div>
        <nav className="nav-buttons">
          <button className="nav-button">Início</button>
          <button className="nav-button">Eventos</button>
          <button className="nav-button">Cadastrar</button>
        </nav>
      </header>
      <main className="background">
        <div className="central-div">
          <div className="event-carousel">
            <img src={events[currentEvent].image} alt={`Imagem do ${events[currentEvent].description}`} className="carousel-image" />
            <p className="carousel-description">{events[currentEvent].description}</p>
          </div>
        </div>
      </main>
    </div>
  );
}

