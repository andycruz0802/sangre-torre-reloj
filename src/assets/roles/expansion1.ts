export class Pieza {
  priority: number = 0;
  nombre: string = '';
  img: string = '';
  x: number = 0;
  y: number = 0;
  visible: boolean = true;
  showDelete?: boolean = false;
  playable?: boolean = true;

  constructor(init?: Partial<Pieza>) {
    Object.assign(this, init);
  }
}

export const ALL_ROLES_1ST_EXP: Pieza[] = [
  new Pieza({ priority: 0, nombre: 'Alcalde', img: 'alcalde', x: 0, y: 0 }),
  new Pieza({ priority: 0, nombre: 'Baron', img: 'baron', x: 0, y: 0 }),
  new Pieza({
    priority: 0,
    nombre: 'Bibliotecario',
    img: 'bibliotecario',
    x: 0,
    y: 0,
  }),
  new Pieza({
    priority: 0,
    nombre: 'Borracho',
    img: 'borracho',
    x: 0,
    y: 0,
    playable: false,
  }),
  new Pieza({ priority: 0, nombre: 'Chef', img: 'chef', x: 0, y: 0 }),
  new Pieza({ priority: 0, nombre: 'Diablillo', img: 'diablillo', x: 0, y: 0 }),
  new Pieza({ priority: 0, nombre: 'Empatico', img: 'empatico', x: 0, y: 0 }),
  new Pieza({
    priority: 0,
    nombre: 'Enterrador',
    img: 'enterrador',
    x: 0,
    y: 0,
  }),
  new Pieza({
    priority: 0,
    nombre: 'Envenenador',
    img: 'envenenador',
    x: 0,
    y: 0,
  }),
  // new Pieza({ priority: 0, nombre: 'Espia', img: 'espia', x: 0, y: 0 }),
  // new Pieza({
  //   priority: 0,
  //   nombre: 'Exterminador',
  //   img: 'exterminador',
  //   x: 0,
  //   y: 0,
  // }),
  // new Pieza({
  //   priority: 0,
  //   nombre: 'Guardiancuervos',
  //   img: 'guardiancuervos',
  //   x: 0,
  //   y: 0,
  // }),
  // new Pieza({
  //   priority: 0,
  //   nombre: 'Investigador',
  //   img: 'investigador',
  //   x: 0,
  //   y: 0,
  // }),
  // new Pieza({ priority: 0, nombre: 'Lavandera', img: 'lavandera', x: 0, y: 0 }),
  // new Pieza({ priority: 0, nombre: 'Mayordomo', img: 'mayordomo', x: 0, y: 0 }),
  // new Pieza({ priority: 0, nombre: 'Monje', img: 'monje', x: 0, y: 0 }),
  // new Pieza({
  //   priority: 0,
  //   nombre: 'Mujerescarlata',
  //   img: 'mujerescarlata',
  //   x: 0,
  //   y: 0,
  // }),
  // new Pieza({ priority: 0, nombre: 'Pitonisa', img: 'pitonisa', x: 0, y: 0 }),
  // new Pieza({ priority: 0, nombre: 'Recluso', img: 'recluso', x: 0, y: 0 }),
  // new Pieza({ priority: 0, nombre: 'Santo', img: 'santo', x: 0, y: 0 }),
  // new Pieza({ priority: 0, nombre: 'Soldado', img: 'soldado', x: 0, y: 0 }),
  // new Pieza({ priority: 0, nombre: 'Virgen', img: 'virgen', x: 0, y: 0 }),
];
