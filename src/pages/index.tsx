import styles from '@/styles/home.module.scss'
import Logo from '../../public/logo.svg';
import Illustration01 from '../../public/illustration-01.svg';
import Illustration02 from '../../public/illustration-02.svg';
import Illustration05 from '../../public/illustration-05.svg';
import Icon01 from '../../public/icons-01.svg';
import Icon02 from '../../public/icons-02.svg';
import Icon03 from '../../public/icons-03.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Link from 'next/link';
import { CardCase } from '@/components/CardCase';
import { Pagination, Navigation } from 'swiper';
import { CardService } from '@/components/CardService';
import { FiArrowRight } from 'react-icons/fi';
import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';


const cases = [
  {
    id: 1,
    title: 'Rotina imóveis',
    description: 'O Rotina Imóveis é um site de imóveis que oferece aos usuários uma ampla variedade de opções para compra, venda e aluguel de imóveis em diferentes localidades. Com uma interface intuitiva e fácil de usar, os usuários podem pesquisar imóveis por tipo, localização e preço, bem como filtrar os resultados por características específicas, como número de quartos, tamanho do lote e número de banheiros.',
    link: ''
  },
  {
    id: 2,
    title: 'Liternautas',
    description: 'O Liternautas é um site e aplicativo que ajuda os usuários a controlarem suas leituras de forma organizada e eficiente. Com uma interface simples e intuitiva, os usuários podem adicionar livros à sua biblioteca virtual, criar listas de leitura, marcar livros como lidos ou em andamento, e receber recomendações de leitura com base em seus interesses.',
    link: ''
  },
  {
    id: 4,
    title: 'Kelly imóveis',
    description: 'A Kelly imóveis Imóveis é um site de imóveis que oferece aos usuários uma ampla variedade de opções para compra, venda e aluguel de imóveis em diferentes localidades. Com uma interface intuitiva e fácil de usar, os usuários podem pesquisar imóveis por tipo, localização e preço, bem como filtrar os resultados por características específicas, como número de quartos, tamanho do lote e número de banheiros.',
    link: ''
  },
  {
    id: 3,
    title: 'App Câmara de Catalão',
    description: 'O aplicativo Câmara de Catalão é uma ferramenta de acesso à informação sobre as atividades da Câmara Municipal de Catalão. Com ele, os usuários podem acompanhar as sessões legislativas, conferir pautas e projetos em tramitação, acessar informações sobre vereadores e suas atuações, e participar de enquetes e pesquisas de opinião.',
    link: ''
  },
]
const services = [
  {
    id: 1,
    title: 'Websites',
    description: 'Nós oferecemos serviços completos de desenvolvimento de sites, desde a criação do design até a implementação final. Nós trabalhamos com as últimas tecnologias e tendências de design para criar sites responsivos e visualmente atraentes que ajudam nossos clientes a se destacar na web.',
    icon: Icon01
  },
  {
    id: 2,
    title: 'Aplicativos',
    description: 'Nós podemos ajudar nossos clientes a criar aplicativos móveis para iOS e Android, desde a concepção do design até a programação final. Nós trabalhamos em estreita colaboração com nossos clientes para garantir que seus aplicativos atendam às necessidades de seus usuários e tenham uma ótima experiência de usuário.',
    icon: Icon02
  },
  {
    id: 3,
    title: 'Sistemas',
    description: 'Nós podemos ajudar nossos clientes a implementar sistemas de gerenciamento de dados eficientes e escaláveis ​​que ajudam a gerenciar e proteger dados críticos do negócio. Nós trabalhamos com as principais tecnologias de banco de dados para garantir que nossos clientes tenham acesso a dados precisos e atualizados em tempo real.',
    icon: Icon03
  },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Zeyah - Desenvolvimento em Catalão em Goiás | Serviços de Desenvolvimento Web e Mobile</title>
        <meta name="description" content="A Zeyah é uma empresa de desenvolvimento em catalão, localizada em Goiás. Oferecemos serviços de desenvolvimento web e móvel para empresas e indivíduos que desejam criar presença online. Nossa equipe altamente qualificada e experiente trabalha em estreita colaboração com nossos clientes para fornecer soluções personalizadas que atendam às suas necessidades de negócios." />
        <meta name="keywords" content="Zeyah, desenvolvimento, catalão, Goiás, web, móvel, presença online, soluções personalizadas, equipe qualificada" />
        <meta name="author" content="Ezequiel Pires e Silva" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.zeyah.com.br/" />
        <link rel="icon" type="image/png" href="/icon.png" />
        <meta property="og:site_name" content="Zeyah"></meta>
        <meta property="og:title" content="Zeyah - Desenvolvimento em Catalão em Goiás | Serviços de Desenvolvimento Web e Mobile" />
        <meta property="og:description" content="A Zeyah é uma empresa de desenvolvimento em catalão, localizada em Goiás. Oferecemos serviços de desenvolvimento web e móvel para empresas e indivíduos que desejam criar presença online. Nossa equipe altamente qualificada e experiente trabalha em estreita colaboração com nossos clientes para fornecer soluções personalizadas que atendam às suas necessidades de negócios." />
        <meta property="og:image" content="/no-image.png" />
        <meta property="og:url" content="https://www.zeyah.com.br/" />
        <meta property="og:type" content="website" />
      </Head>
      <main className={styles.main}>
        <div className={styles.section_banner}>
          <header className={styles.header}>
            <div className={styles.border_top}></div>
            <div className={styles.container}>
              <div className={styles.header_content}>
                <Image src={Logo} alt='Logo' />
                <ul className={styles.header_links}>
                  <li>
                    <Link href={'/'}>Início</Link>
                  </li>
                  <li>
                    <Link href={'#quem-somos'}>Quem somos</Link>
                  </li>
                  <li>
                    <Link href={'#nossos-cases'}>Nossos cases</Link>
                  </li>
                  <li>
                    <Link href={'#servicos'}>Serviços</Link>
                  </li>
                  <li>
                    <Link href={'#servicos'}>Contato</Link>
                  </li>
                </ul>
              </div>
            </div>
          </header>
          <div className={styles.section_banner_content}>
            <div className={styles.content_text}>
              <h1>A tecnologia que nos une para reinventar o mundo.</h1>
              <p>A partir de um desenvolvimento ágil, descomplicamos processos e damos poder de transformação para as empresas.</p>
              <a href="#nossos-cases">NOSSOS CASES <FiArrowRight /></a>
            </div>
            <Image src={Illustration01} alt='' />
          </div>
        </div>
        <section id='quem-somos' className={styles.section}>
          <div className={styles.container + ' ' + styles.section_content}>
            <h2 className={styles.section_title}>Quem somos <span>.</span></h2>
            <Image src={Illustration02} alt='' />
            <p className={styles.section_text}><span>“</span> Somos a Zeyah, uma empresa de desenvolvimento comprometida em criar soluções inovadoras e personalizadas para nossos clientes. Nós nos especializamos em desenvolvimento de sites, aplicativos móveis e sistemas de gerenciamento de dados para empresas de todos os tamanhos. Nosso objetivo é ajudar nossos clientes a alcançar seus objetivos de negócios por meio de tecnologia eficiente e soluções de ponta. Desde startups em fase inicial até empresas consolidadas, estamos prontos para ajudá-los a atingir seu máximo potencial. <span>”</span></p>
          </div>
        </section>
        <section id='nossos-cases' className={styles.section}>
          <div className={styles.container + ' ' + styles.section_content}>
            <h2 className={styles.section_title}>Nossos cases <span>.</span></h2>
            {/* <Image src={Illustration03} alt='' /> */}
            <Swiper modules={[Pagination, Navigation]} slidesPerView={'auto'} navigation>
              {cases?.map(item =>
                <SwiperSlide key={item.id}>
                  <CardCase {...item} />
                </SwiperSlide>
              )}
            </Swiper>
          </div>
        </section>
        <section id='servicos' className={styles.section}>
          <div className={styles.container + ' ' + styles.section_content}>
            <h2 className={styles.section_title}>Nossos serviços<span>.</span></h2>
            {/* <Image src={Illustration04} alt='' /> */}
            <Swiper modules={[Pagination, Navigation]} slidesPerView={'auto'} navigation>
              {services?.map(item =>
                <SwiperSlide key={item.id}>
                  <CardService {...item} />
                </SwiperSlide>
              )}
            </Swiper>

          </div>
        </section>
        <section id='contato' className={styles.section}>
          <div className={styles.container + ' ' + styles.section_content}>
            <h2 className={styles.section_title} style={{ marginBottom: 0 }}>Contato<span>.</span></h2>
            <p className={styles.section_text}><span>“</span>Esse é o início de uma jornada incrível<span>”</span></p>
            <Image src={Illustration05} alt='' />
            <form className={styles.form} onSubmit={e => e.preventDefault()}>
              <input className={styles.input} placeholder='Seu nome ou o da sua empresa' />
              <input className={styles.input} placeholder='Email' />
              <input className={styles.input} placeholder='Telefone' />
              <textarea className={styles.textarea} placeholder='Mensagem' />
              <button className={styles.button_primary}>Enviar mensagem</button>
            </form>
          </div>
        </section>
        <footer className={styles.footer}>
          <p className={styles.section_text} style={{ fontSize: 14 }}>Copyright © 2023 <span>zeyah.com.br</span>. Todos os direitos reservados.</p>
        </footer>
      </main>
    </>
  )
}
