'use client';
import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { fetchRevenue, fetchLatestInvoices, fetchCardData, fetchCarrocelEventosForm } from '@/app/lib/data';
import '@/app/ui/events/styles.css';
import '@/app/styles.css';
import { useState, useEffect } from 'react';
import { CarrocelEventosForm } from '@/app/lib/definitions';

export default function Page() {
  const [events, setEvents] = useState<CarrocelEventosForm[]>([]);
  const [currentEvent, setCurrentEvent] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const carrocel = await fetchCarrocelEventosForm();
      setEvents(carrocel);
    }
    fetchData();
  }, []);

  console.log(events);

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
          {events.length > 0 && (
            <div className="event-carousel">
              <img src={events[currentEvent].link_imagem} alt={`Imagem do ${events[currentEvent].informacoes_gerais}`} className="carousel-image" />
              <p className="carousel-description">{events[currentEvent].informacoes_gerais}</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
