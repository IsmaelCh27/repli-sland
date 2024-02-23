import streamer1 from '../../../public/images/palmares/streamer1.b0c3ecbe.jpg';
import streamer2 from '../../../public/images/palmares/streamer2.301b9e18.jpg';
import serie1 from '../../../public/images/palmares/serie1.19c7d9bf.jpg';
import serie2 from '../../../public/images/palmares/serie2.cc2db0f3.jpg';
import revelacion1 from '../../../public/images/palmares/revelacion1.e18c43a6.jpg';
import revelacion2 from '../../../public/images/palmares/revelacion2.619ae3e0.jpg';
import evento1 from '../../../public/images/palmares/evento1.35049191.jpg';
import evento2 from '../../../public/images/palmares/evento2.2a985952.jpg';
import trayectoria1 from '../../../public/images/palmares/trayectoria1.fa554abf.jpg';
import trayectoria2 from '../../../public/images/palmares/trayectoria2.f5f9640d.jpg';
import talkshow1 from '../../../public/images/palmares/talkshow1.f6b45d3f.jpg';
import talkshow2 from '../../../public/images/palmares/talkshow2.66169e83.jpg';
import cancion1 from '../../../public/images/palmares/cancion1.4de07f2c.jpg';
import cancion2 from '../../../public/images/palmares/cancion2.27d9cb4c.jpg';
import jagger1 from '../../../public/images/palmares/jagger1.95307854.jpg';
import jagger2 from '../../../public/images/palmares/jagger2.44ddd520.jpg';
import irl1 from '../../../public/images/palmares/irl1.3f6cafa9.jpg';
import irl2 from '../../../public/images/palmares/irl2.8e159c2f.jpg';
import caster1 from '../../../public/images/palmares/caster1.175e1378.jpg';
import caster2 from '../../../public/images/palmares/caster2.bcaa64fd.jpg';
import reportero1 from '../../../public/images/palmares/reportero1.e79dc76f.jpg';
import reportero2 from '../../../public/images/palmares/reportero2.eb8d7517.jpg';
import jugador1 from '../../../public/images/palmares/jugador1.4cdd14ad.jpg';
import jugador2 from '../../../public/images/palmares/jugador2.22ec55d0.jpg';
import roleplayer1 from '../../../public/images/palmares/roleplayer1.21f1d5b0.jpg';
import roleplayer2 from '../../../public/images/palmares/roleplayer1.21f1d5b0.jpg';
import baile1 from '../../../public/images/palmares/baile1.b9af3586.jpg';
import baile2 from '../../../public/images/palmares/baile2.adcdf1d8.jpg';
import enfadado1 from '../../../public/images/palmares/enfadado1.b0344e06.jpg';
import enfadado2 from '../../../public/images/palmares/enfadado2.bc98b043.jpg';
import fail1 from '../../../public/images/palmares/fail1.2585999c.jpg';
import fail2 from '../../../public/images/palmares/fail2.5efa3a0c.jpg';
import clip1 from '../../../public/images/palmares/clip1.9244200c.jpg';
import clip2 from '../../../public/images/palmares/clip2.8000b179.jpg';

type StaticImageData = {
  src: string;
  height: number;
  width: number;
  placeholder?: string;
};

export interface PalmaresDataI {
  id: number;
  category: string;
  winners: {
    id: number;
    name: string;
    community: number;
    streamers: number;
    total: number;
    image: StaticImageData | string;
  }[];
}

export const palmaresData: PalmaresDataI[] = [
  {
    id: 1,
    category: 'Streamer del año',
    winners: [
      {
        id: 1,
        name: 'Ibai',
        community: 41.05,
        streamers: 75.6,
        total: 58.33,
        image: streamer1,
      },
      {
        id: 2,
        name: 'Auronplay',
        community: 2.85,
        streamers: 8.1,
        total: 20.48,
        image: streamer2,
      },
    ],
  },
  {
    id: 2,
    category: 'Serie de contenido del año',
    winners: [
      {
        id: 1,
        name: 'Tortillaland',
        community: 39.92,
        streamers: 27.7,
        total: 33.81,
        image: serie1,
      },
      {
        id: 2,
        name: 'Egoland',
        community: 20.09,
        streamers: 40.6,
        total: 33.35,
        image: serie2,
      },
    ],
  },
  {
    id: 3,
    category: 'Streamer revelación del año',
    winners: [
      {
        id: 1,
        name: 'elXokas',
        community: 27.74,
        streamers: 54,
        total: 40.87,
        image: revelacion1,
      },
      {
        id: 2,
        name: 'ElMariana',
        community: 30.38,
        streamers: 27,
        total: 28.69,
        image: revelacion2,
      },
    ],
  },
  {
    id: 4,
    category: 'Evento del año',
    winners: [
      {
        id: 1,
        name: 'La velada del año',
        community: 48.78,
        streamers: 72.9,
        total: 60.84,
        image: evento1,
      },
      {
        id: 2,
        name: 'Mundial de Globos',
        community: 27.27,
        streamers: 18.9,
        total: 23.1,
        image: evento2,
      },
    ],
  },
  {
    id: 5,
    category: 'Mejor trayectoria',
    winners: [
      {
        id: 1,
        name: 'Fernanfloo',
        community: 60.25,
        streamers: 18.9,
        total: 39.58,
        image: trayectoria1,
      },
      {
        id: 2,
        name: 'Knekro',
        community: 19.68,
        streamers: 37.8,
        total: 28.74,
        image: trayectoria2,
      },
    ],
  },
  {
    id: 6,
    category: 'Talk show del año',
    winners: [
      {
        id: 1,
        name: 'The Wild Project',
        community: 43.81,
        streamers: 45.9,
        total: 44.86,
        image: talkshow1,
      },
      {
        id: 2,
        name: 'Yointerneto',
        community: 16.05,
        streamers: 21.6,
        total: 18.83,
        image: talkshow2,
      },
    ],
  },
  {
    id: 7,
    category: 'Canción del año',
    winners: [
      {
        id: 1,
        name: 'El cuarteto de Ibai',
        community: 54.6,
        streamers: 40.5,
        total: 47.55,
        image: cancion1,
      },
      {
        id: 2,
        name: 'Tofu Delivery',
        community: 10.41,
        streamers: 29.7,
        total: 20.1,
        image: cancion2,
      },
    ],
  },
  {
    id: 8,
    category: 'Jägger del año',
    winners: [
      {
        id: 1,
        name: 'Jägger boxeador',
        community: 36.09,
        streamers: 51.3,
        total: 43.7,
        image: jagger1,
      },
      {
        id: 2,
        name: 'Profesor Jägger',
        community: 34.19,
        streamers: 24.3,
        total: 29.25,
        image: jagger2,
      },
    ],
  },
  {
    id: 9,
    category: 'Streamer IRL del año',
    winners: [
      {
        id: 1,
        name: 'Kidi',
        community: 20.81,
        streamers: 67.5,
        total: 44.15,
        image: irl1,
      },
      {
        id: 2,
        name: 'Momo',
        community: 51.39,
        streamers: 16.2,
        total: 33.79,
        image: irl2,
      },
    ],
  },
  {
    id: 10,
    category: 'Caster del año',
    winners: [
      {
        id: 1,
        name: 'Kaquka',
        community: 40.48,
        streamers: 27,
        total: 33.74,
        image: caster1,
      },
      {
        id: 2,
        name: 'Champi',
        community: 24.41,
        streamers: 29.7,
        total: 27.1,
        image: caster2,
      },
    ],
  },
  {
    id: 11,
    category: 'Reportero/a de esports del año',
    winners: [
      {
        id: 1,
        name: 'Cristinini',
        community: 66.01,
        streamers: 35.1,
        total: 50.56,
        image: reportero1,
      },
      {
        id: 2,
        name: 'Yuste',
        community: 18.79,
        streamers: 43.2,
        total: 31,
        image: reportero2,
      },
    ],
  },
  {
    id: 12,
    category: 'Jugador/a de esports del año',
    winners: [
      {
        id: 1,
        name: 'Mixwell',
        community: 32.92,
        streamers: 37.8,
        total: 35.36,
        image: jugador1,
      },
      {
        id: 2,
        name: 'ElYoya',
        community: 26.82,
        streamers: 37.8,
        total: 32.31,
        image: jugador2,
      },
    ],
  },
  {
    id: 13,
    category: 'Roleplayer del año',
    winners: [
      {
        id: 1,
        name: 'AgenteMaxo',
        community: 23.14,
        streamers: 40.5,
        total: 31.82,
        image: roleplayer1,
      },
      {
        id: 2,
        name: 'Cristinini',
        community: 28.52,
        streamers: 29.7,
        total: 29.11,
        image: roleplayer2,
      },
    ],
  },
  {
    id: 14,
    category: 'Baile del año',
    winners: [
      {
        id: 1,
        name: 'Papi Gavi',
        community: 45.96,
        streamers: 35.1,
        total: 40.53,
        image: baile1,
      },
      {
        id: 2,
        name: 'Ibai Llanos',
        community: 25.14,
        streamers: 54,
        total: 39.57,
        image: baile2,
      },
    ],
  },
  {
    id: 15,
    category: 'Enfadado/a del año',
    winners: [
      {
        id: 1,
        name: 'Agustin51',
        community: 34.16,
        streamers: 51.3,
        total: 42.73,
        image: enfadado1,
      },
      {
        id: 2,
        name: 'ElXocas',
        community: 23.06,
        streamers: 18.9,
        total: 20.98,
        image: enfadado2,
      },
    ],
  },
  {
    id: 16,
    category: 'Fail del año',
    winners: [
      {
        id: 1,
        name: 'Ibai',
        community: 47.59,
        streamers: 27,
        total: 37.29,
        image: fail1,
      },
      {
        id: 2,
        name: 'Ampeter',
        community: 27.73,
        streamers: 43.2,
        total: 35.46,
        image: fail2,
      },
    ],
  },
  {
    id: 17,
    category: 'Clip del año',
    winners: [
      {
        id: 1,
        name: 'El Kun',
        community: 42.61,
        streamers: 32.4,
        total: 37.51,
        image: clip1,
      },
      {
        id: 2,
        name: 'Esto no es un juego',
        community: 21.86,
        streamers: 51.3,
        total: 36.58,
        image: clip2,
      },
    ],
  },
];
