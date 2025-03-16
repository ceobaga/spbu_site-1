import React from 'react';
import './About.scss';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1 className="about-title">О Санкт-Петербургском государственном университете</h1>
        
        <section className="about-section">
          <h2>Общая информация</h2>
          <p>
            Санкт-Петербургский государственный университет — один из крупнейших и старейших университетов России, 
            основанный в 1724 году. За свою почти 300-летнюю историю СПбГУ подготовил множество выдающихся 
            выпускников, среди которых нобелевские лауреаты, видные государственные и общественные деятели, 
            известные деятели науки и культуры.
          </p>
        </section>

        <section className="about-section">
          <h2>Миссия университета</h2>
          <p>
            Миссия СПбГУ — создание, сохранение и передача следующим поколениям научных знаний и культурных 
            ценностей, формирование высокообразованных, творчески мыслящих специалистов, способных решать 
            задачи в интересах общества и государства.
          </p>
        </section>

        <section className="about-section">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>30000+</h3>
              <p>Студентов</p>
            </div>
            <div className="stat-item">
              <h3>400+</h3>
              <p>Образовательных программ</p>
            </div>
            <div className="stat-item">
              <h3>6000+</h3>
              <p>Преподавателей и научных сотрудников</p>
            </div>
            <div className="stat-item">
              <h3>25</h3>
              <p>Факультетов и институтов</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Образование мирового уровня</h2>
          <p>
            СПбГУ предлагает широкий спектр образовательных программ, соответствующих международным 
            стандартам качества. Университет активно развивает международное сотрудничество, участвует 
            в программах академического обмена и реализует совместные научные проекты с ведущими 
            университетами мира.
          </p>
        </section>

        <section className="about-section">
          <h2>Научная деятельность</h2>
          <p>
            Университет является одним из ведущих научных центров России. В СПбГУ работают десятки научных 
            лабораторий и исследовательских центров, где проводятся фундаментальные и прикладные исследования 
            по широкому спектру направлений.
          </p>
        </section>

        <section className="about-section">
          <h2>Инфраструктура</h2>
          <div className="facilities-grid">
            <div className="facility-item">
              <h3>Научная библиотека</h3>
              <p>Более 7 миллионов единиц хранения</p>
            </div>
            <div className="facility-item">
              <h3>Научный парк</h3>
              <p>Современное исследовательское оборудование</p>
            </div>
            <div className="facility-item">
              <h3>Кампусы</h3>
              <p>Комфортные условия для учебы и проживания</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
