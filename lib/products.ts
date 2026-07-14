export type Category = {
  slug: string
  name: string
  tagline: string
  image: string
}

export type Product = {
  id: string
  name: string
  category: string // category slug
  price: number
  badge?: string
  blurb: string
  description: string
  details: string[]
  image: string
}

export const categories: Category[] = [
  {
    slug: 'envoltura-de-regalos',
    name: 'Envoltura de regalos',
    tagline: 'Detalles finales que hacen la diferencia',
    image: '/images/envoltura-regalos/envoltura-regalos-01.webp',
  },
  {
    slug: 'desayunos-sorpresa',
    name: 'Desayunos sorpresa',
    tagline: 'Entregas dulces para empezar el día',
    image: '/images/desayunos/desayuno-h-04.webp',
  },
  {
    slug: 'cajas-de-dulces',
    name: 'Cajas de dulces',
    tagline: 'Cajas sorpresa llenas de dulces y detalles',
    image: '/images/dulces/caja-dulces-01.webp',
  },
  {
    slug: 'anchetas-a-tu-gusto',
    name: 'Anchetas a tu gusto',
    tagline: 'Canastas decoradas a tu manera',
    image: '/images/anchetas/anchetas-08.webp',
  },
  {
    slug: 'globos-personalizados',
    name: 'Globos personalizados',
    tagline: 'Globos y sorpresas para cada celebración',
    image: '/images/globos/globos-01.webp',
  },
  {
    slug: 'peluches',
    name: 'Peluches',
    tagline: 'Compañeros suaves y tiernos',
    image: '/images/peluches/peluches-01.webp',
  },
  {
    slug: 'flores-y-otros',
    name: 'Flores y otros',
    tagline: 'Ramos, flores secas y detalles para regalar',
    image: '/images/flores-otros/flores-otros-01.webp',
  },
]

export const products: Product[] = [
  // Envoltura de regalos
  {
    id: 'gift-bag-metallic-green',
    name: 'Bolsa de Regalo Metalizada Verde',
    category: 'envoltura-de-regalos',
    price: 14,
    badge: 'Más vendido',
    blurb: 'Bolsa de regalo metalizada verde brillante con asas, parte de nuestro servicio de envoltura.',
    description:
      'Bolsa de regalo en acabado metalizado verde brillante con asas trenzadas, ideal para complementar cualquier obsequio. Hace parte de nuestra amplia selección de bolsas, papeles y accesorios de envoltura disponibles para armar el empaque perfecto en tienda.',
    details: ['Acabado metalizado brillante', 'Asas trenzadas resistentes', 'Disponible en varios tamaños y colores'],
    image: '/images/envoltura-regalos/envoltura-regalos-01.webp',
  },
  {
    id: 'themed-gift-box-set',
    name: 'Cajas de Regalo Temáticas Sorpresa',
    category: 'envoltura-de-regalos',
    price: 22,
    blurb: 'Set de cajas de regalo temáticas ilustradas para papá, cumpleaños y ocasiones especiales.',
    description:
      'Colección de cajas de regalo de cartón rígido con ilustraciones temáticas para el día del papá, cumpleaños y otras celebraciones, listas para rellenar con dulces o detalles pequeños. Se exhiben junto a nuestros globos y peluches como parte del servicio completo de armado de regalos.',
    details: ['Cajas de cartón rígido ilustradas', 'Variedad de temas y ocasiones', 'Ideal para armar regalos sorpresa'],
    image: '/images/envoltura-regalos/envoltura-regalos-02.webp',
  },
  // Desayunos sorpresa
  {
    id: 'desayuno-te-amo-cervezas',
    name: 'Desayuno Sorpresa Te Amo con Cervezas',
    category: 'desayunos-sorpresa',
    price: 65,
    badge: 'Más vendido',
    blurb: 'Mesa desayunera con globo burbuja "Te Amo", cervezas Coronita y snacks salados.',
    description:
      'Una pequeña banca de madera vestida con mantel a cuadros rojo y blanco, cargada de maní salado, galletas Naky Naky, chocolatinas y tres cervecitas Coronita amarradas con cintas rojas. Se corona con un globo burbuja transparente con un corazón que dice "Te Amo" y dos globos en forma de corazón.',
    details: ['Globo burbuja "Te Amo" con corazón interior', '3 cervezas Coronita Extra', 'Mesa de madera con mantel a cuadros'],
    image: '/images/desayunos/desayuno-h-01.webp',
  },
  {
    id: 'desayuno-rustico-uvas',
    name: 'Desayuno Rústico Guirnalda de Uvas',
    category: 'desayunos-sorpresa',
    price: 55,
    blurb: 'Banca blanca con guirnalda de globos en forma de uvas y picada surtida.',
    description:
      'Sobre una banca de madera blanca con mantel a cuadros rojos, se despliega una selección de pasabocas colombianos como Detodito, Choclitos y galletas Noel, acompañados de una copa de frutas frescas y cervezas frías. Una vistosa guirnalda de globos en racimo plateado y rojo simula un parral de uvas.',
    details: ['Guirnalda de globos en forma de uvas', 'Copa de fruta fresca incluida', 'Pasabocas colombianos surtidos'],
    image: '/images/desayunos/desayuno-h-02.webp',
  },
  {
    id: 'desayuno-torta-casera',
    name: 'Desayuno Amor con Torta Casera',
    category: 'desayunos-sorpresa',
    price: 70,
    blurb: 'Mesa desayunera con torta casera, tarjeta de amor y globo espejo de corazón.',
    description:
      'Una banca de madera roja sostiene una torta artesanal recién horneada, jugo natural, Milo, maní Kraks y una tarjeta escrita a mano que agradece por los pequeños detalles del amor. Globos rojos, uno blanco con corazones "Te Amo" y un globo espejado en forma de corazón completan el montaje.',
    details: ['Torta casera artesanal incluida', 'Tarjeta con mensaje de amor', 'Globo espejado en forma de corazón'],
    image: '/images/desayunos/desayuno-h-03.webp',
  },
  {
    id: 'caja-marmol-azul-cumpleanos',
    name: 'Caja Mármol Azul Cumpleaños',
    category: 'desayunos-sorpresa',
    price: 40,
    blurb: 'Caja con acabado mármol azul y dorado, llena de chocolates para cumpleaños.',
    description:
      'Una caja de regalo con textura de mármol en azul y dorado, dividida en compartimentos con chocolates finos envueltos en cinta azul marino, maní salado y golosinas Bon Yurt. Se acompaña de un globo metálico azul que anuncia "Feliz Cumpleaños" entre estrellas doradas.',
    details: ['Compartimentos con chocolates finos', 'Globo metálico azul "Feliz Cumpleaños"', 'Acabado caja mármol azul y dorado'],
    image: '/images/desayunos/desayuno-h-04.webp',
  },
  {
    id: 'desayuno-stitch-rosa',
    name: 'Desayuno Sorpresa Angel Rosa Stitch',
    category: 'desayunos-sorpresa',
    price: 60,
    blurb: 'Peluche rosa de Angel (Stitch) con arco de globos morados y rosados.',
    description:
      'Un adorable peluche rosado de Angel, la novia de Stitch, se asoma entre un arco de globos morados y fucsia decorado con mariposas y stickers de Lilo & Stitch. Debajo, una charola de madera reúne Oreo, chocolatinas y jugo natural, ideal para una cumpleañera fan de Disney.',
    details: ['Peluche de Angel (Stitch) incluido', 'Arco de globos morado y rosa', 'Snacks y jugo natural surtidos'],
    image: '/images/desayunos/desayuno-m-01.webp',
  },
  {
    id: 'desayuno-hello-kitty-isa',
    name: 'Desayuno Hello Kitty Personalizado',
    category: 'desayunos-sorpresa',
    price: 58,
    blurb: 'Peluche de Hello Kitty con globos rosa y dorado, personalizado con nombre.',
    description:
      'Un tierno peluche de Hello Kitty con moño de fresas preside esta charola de madera personalizada con el nombre de la festejada en letras de madera. Chocolatinas, bombones Chocorramo y un jugo la acompañan, rodeados de globos en rosa chicle, dorado cromado y blanco perlado.',
    details: ['Peluche de Hello Kitty incluido', 'Base personalizada con nombre en madera', 'Globos rosa chicle y dorado cromado'],
    image: '/images/desayunos/desayuno-m-02.webp',
  },
  {
    id: 'desayuno-rosas-happy-birthday',
    name: 'Desayuno Rosas y Happy Birthday',
    category: 'desayunos-sorpresa',
    price: 52,
    blurb: 'Rosas rojas frescas junto a torta y globo de mariposa dorada.',
    description:
      'Una docena de rosas rojas frescas con velo de novia se combinan con una porción de torta casera, ponqué y dulces en una jaba de madera con letrero dorado "Happy Birthday". Un globo fucsia de "Feliz Cumpleaños", uno dorado cromado y otro con mariposa calada rematan la composición.',
    details: ['Rosas rojas frescas incluidas', 'Porción de torta y ponqué casero', 'Letrero dorado "Happy Birthday"'],
    image: '/images/desayunos/desayuno-m-03.webp',
  },
  {
    id: 'desayuno-osito-virgen',
    name: 'Desayuno Osito Azul y Virgen de Guadalupe',
    category: 'desayunos-sorpresa',
    price: 68,
    badge: 'Nuevo',
    blurb: 'Osito de las nubes azul junto a rosas rojas y figura de chocolate de la Virgen.',
    description:
      'Un peluche de osito cariñoso en azul cielo hace compañía a un ramo de rosas rojas y una figura de chocolate de la Virgen de Guadalupe, dispuestos en una jaba de madera con mantel a cuadros rosa. Se completa con dulces, jugo natural y un globo burbuja rosado de cumpleaños.',
    details: ['Peluche osito cariñoso azul', 'Figura de chocolate religiosa', 'Rosas rojas y globo burbuja rosado'],
    image: '/images/desayunos/desayuno-m-04.webp',
  },
  // Cajas de dulces
  {
    id: 'caja-aniversario-dorada',
    name: 'Caja Dorada Diez Razones para Amarte',
    category: 'cajas-de-dulces',
    price: 45,
    badge: 'Más vendido',
    blurb: 'Caja dorada con globo de "Feliz Aniversario" y diez razones para amarte.',
    description:
      'Una caja dorada con ventana transparente repleta de maní salado, galletas Naky Naky, chocolatinas y una cervecita Coronita, coronada con dijes que dicen "sé fiel" y "piénsame". Se entrega con un globo rojo de corazones inflado con helio y un moño de cintas a juego.',
    details: ['Globo rojo "Feliz Aniversario" con helio', 'Snacks surtidos y cerveza Coronita', 'Dijes decorativos "Diez razones para amarte"'],
    image: '/images/dulces/caja-dulces-01.webp',
  },
  {
    id: 'caja-hot-wheels',
    name: 'Caja Sorpresa Hot Wheels',
    category: 'cajas-de-dulces',
    price: 38,
    blurb: 'Caja a cuadros de carreras con carritos Hot Wheels de regalo.',
    description:
      'Una caja con acabado a cuadros blanco y negro estilo pista de carreras, decorada con banderines y llantas ilustradas. Dentro trae dos carritos Hot Wheels originales listos para coleccionar, envueltos con un lazo rojo brillante.',
    details: ['2 carritos Hot Wheels originales', 'Caja decorada estilo pista de carreras', 'Lazo de cinta roja satinada'],
    image: '/images/dulces/caja-dulces-02.webp',
  },
  {
    id: 'caja-princesas-disney',
    name: 'Caja Princesas Disney Personalizada',
    category: 'cajas-de-dulces',
    price: 35,
    badge: 'Nuevo',
    blurb: 'Caja rosa con las Princesas Disney y el nombre de la festejada.',
    description:
      'Caja de regalo en tono rosa con ventana transparente, decorada con un castillo, una carroza y las Princesas Disney, además de una etiqueta personalizada con el nombre de la cumpleañera. Un moño fucsia XL corona esta caja pensada para las más pequeñas.',
    details: ['Personalizada con el nombre de la niña', 'Diseño Disney Princesas', 'Moño fucsia XL de regalo'],
    image: '/images/dulces/caja-dulces-03.webp',
  },
  // Anchetas a tu gusto
  {
    id: 'ancheta-ramo-chocolate-dorado',
    name: 'Ramo Doble de Chocolates y Licor',
    category: 'anchetas-a-tu-gusto',
    price: 50,
    badge: 'Más vendido',
    blurb: 'Par de ramos de chocolates envueltos en papel fucsia y rosado.',
    description:
      'Dos ramos gemelos armados con Nutella, Trolli, chocolatina Piazza, Trululu y una mini Smirnoff Ice, envueltos en papel crepé fucsia y rosa pastel con moños brillantes. Se entregan con globos cromados dorados que dicen "Feliz Cumpleaños".',
    details: ['Nutella, Trolli y chocolatina Piazza', 'Mini Smirnoff Ice incluido', 'Globos cromados dorados'],
    image: '/images/anchetas/anchetas-01.webp',
  },
  {
    id: 'ancheta-girasol-rosas',
    name: 'Ancheta Girasol y Rosas Rojas',
    category: 'anchetas-a-tu-gusto',
    price: 62,
    blurb: 'Girasol y rosas rojas rodeados de snacks, Coronita y chocolate.',
    description:
      'Un llamativo girasol al centro de un ramo de rosas rojas se combina con Oreo, chocolatina Piazza, Trolli, maní Kraks y una cervecita Coronita Extra, más una porción de torta. Un globo rosado "Feliz Cumpleaños" y uno inflable en forma de corazón completan el regalo.',
    details: ['Girasol y rosas rojas frescas', 'Torta, Oreo y cerveza Coronita', 'Globo de corazón y "Feliz Cumpleaños"'],
    image: '/images/anchetas/anchetas-02.webp',
  },
  {
    id: 'ancheta-flores-perfume-andre',
    name: 'Ancheta Floral con Perfume Personalizada',
    category: 'anchetas-a-tu-gusto',
    price: 75,
    blurb: 'Flores multicolor, champaña y perfume personalizados con el nombre del festejado.',
    description:
      'Cajones de madera con hortensias rosadas, margaritas amarillas y flores moradas enmarcan una botella de champaña con moño rosa y un perfume corporal, sobre una jaba con el nombre del festejado en banderines. Snacks, mermelada y un globo fucsia "Feliz Cumpleaños" completan el detalle.',
    details: ['Botella de champaña y perfume incluidos', 'Flores frescas multicolor', 'Jaba personalizada con nombre'],
    image: '/images/anchetas/anchetas-03.webp',
  },
  {
    id: 'ancheta-gatica-marie-mama',
    name: 'Ancheta Gatica Marie para Mamá',
    category: 'anchetas-a-tu-gusto',
    price: 58,
    blurb: 'Peluche de la gatica Marie con rosas rosadas y mensaje para mamá.',
    description:
      'El entrañable peluche de Marie, la gatica de Aristogatos, se sienta junto a un ramo de rosas rosadas y una tarjeta que desea bendiciones a "Madre" en su día especial. La acompañan galletas, maní Kraks y una compota, todo sobre una base de madera con moño rosa.',
    details: ['Peluche de la gatica Marie', 'Rosas rosadas y tarjeta para mamá', 'Globo burbuja y globo marmoleado rosa'],
    image: '/images/anchetas/anchetas-04.webp',
  },
  {
    id: 'ancheta-barbie-valentina',
    name: 'Ancheta Barbie Castillo Rosa',
    category: 'anchetas-a-tu-gusto',
    price: 66,
    blurb: 'Caja Barbie con castillo rosa, tiara y bolso de peluche corazón.',
    description:
      'Una ancheta rosa y dorada dedicada a Barbie, con recorte de castillo de princesa, dulces Lokiño, Maracuyá y un Kinder Joy, además de un bolso de peluche en forma de corazón y accesorios de bisutería. Se personaliza con el nombre de la festejada en la base y un globo metálico de cumpleaños.',
    details: ['Diseño Barbie con castillo rosa', 'Bolso de peluche en forma de corazón', 'Personalizada con el nombre de la niña'],
    image: '/images/anchetas/anchetas-05.webp',
  },
  {
    id: 'ancheta-gamer-control',
    name: 'Ancheta Gamer Control de Videojuego',
    category: 'anchetas-a-tu-gusto',
    price: 48,
    blurb: 'Ramo con control de videojuego en madera, Doritos y Coca-Cola.',
    description:
      'Un control de videojuego tallado en madera corona este ramo pensado para gamers, armado con Doritos, salchichas Zenú, chocolatina Jumbo, Coca-Cola y una mini Smirnoff Ice. Cintas negras y turquesa con moño a juego rematan la entrega.',
    details: ['Control de videojuego decorativo en madera', 'Doritos, Coca-Cola y salchichas Zenú', 'Cintas negras y turquesa'],
    image: '/images/anchetas/anchetas-06.webp',
  },
  {
    id: 'ancheta-cerveza-corona',
    name: 'Ancheta Cervecera Corona Extra',
    category: 'anchetas-a-tu-gusto',
    price: 60,
    blurb: 'Ramo de cervezas Corona y Smirnoff Ice con peluche de caballito.',
    description:
      'Latas y botellas de Corona Extra se combinan con mini Smirnoff Ice, Nutella, maní Kraks y chocolatinas en este ramo para los amantes de la cerveza, decorado con un tierno peluche de caballo. Un globo metálico negro de Corona y uno azul de "Feliz Cumpleaños" flotan sobre el arreglo.',
    details: ['Cervezas Corona Extra y Smirnoff Ice', 'Peluche de caballito incluido', 'Globo metálico Corona y azul cumpleaños'],
    image: '/images/anchetas/anchetas-07.webp',
  },
  {
    id: 'ancheta-hello-kitty-belleza',
    name: 'Ancheta Hello Kitty de Belleza',
    category: 'anchetas-a-tu-gusto',
    price: 54,
    blurb: 'Set de belleza Hello Kitty con neceser, bálsamo labial y accesorios.',
    description:
      'Una selección de artículos de belleza con licencia Hello Kitty: neceser rosa, bálsamo labial, mini libreta, ganchos para el cabello y aretes, envueltos en papel fucsia intenso. Un globo rosa pastel de Hello Kitty corona este regalo ideal para fans de la gatita.',
    details: ['Neceser Hello Kitty incluido', 'Bálsamo labial y accesorios de cabello', 'Globo rosa pastel Hello Kitty'],
    image: '/images/anchetas/anchetas-08.webp',
  },
  {
    id: 'ancheta-hello-kitty-dulces',
    name: 'Ancheta Hello Kitty de Dulces',
    category: 'anchetas-a-tu-gusto',
    price: 50,
    badge: 'Nuevo',
    blurb: 'Peluche de Hello Kitty rodeado de Nutella, chispas y globo fucsia.',
    description:
      'Un peluche de Hello Kitty con moño fucsia se acomoda entre Nutella, chispas de chocolate, Rosetas y golosinas surtidas, todo sobre una jaba de madera con cinta de lunares rosa. Se entrega con un globo fucsia de helio con el diseño clásico de Hello Kitty.',
    details: ['Peluche de Hello Kitty incluido', 'Nutella y chispas de chocolate', 'Globo fucsia Hello Kitty con helio'],
    image: '/images/anchetas/anchetas-09.webp',
  },
  // Globos personalizados
  {
    id: 'bubble-balloon-minnie-baby',
    name: 'Globo Burbuja Minnie Baby Shower',
    category: 'globos-personalizados',
    price: 55,
    badge: 'Más vendido',
    blurb: 'Globo burbuja transparente con peluche de Minnie bebé y esferas de espuma pastel.',
    description:
      'Un globo burbuja gigante transparente relleno con esferas de espuma en tonos pastel y un tierno peluche de Minnie con moño rosado bebé. Incluye una tarjeta personalizada de bienvenida, ideal para baby shower o revelación de género.',
    details: ['Globo burbuja XL transparente', 'Esferas de espuma pastel', 'Peluche de Minnie bebé + tarjeta'],
    image: '/images/globos/globos-01.webp',
  },
  {
    id: 'bubble-balloon-photo-candy',
    name: 'Globo Burbuja con Foto y Dulces',
    category: 'globos-personalizados',
    price: 42,
    blurb: 'Globo burbuja transparente personalizado con foto impresa y relleno de gomitas surtidas.',
    description:
      'Globo burbuja cristalino coronado con un gran moño rojo, que lleva colgada una fotografía personalizada en el centro y un generoso surtido de gomitas y dulces de colores en el fondo. Un detalle único y personalizado para sorprender a alguien especial.',
    details: ['Globo burbuja personalizado', 'Foto impresa incluida', 'Gomitas y dulces surtidos'],
    image: '/images/globos/globos-02.webp',
  },
  // Peluches
  {
    id: 'plush-bunny-pink-gingham',
    name: 'Peluche Conejita a Cuadros Rosa',
    category: 'peluches',
    price: 45,
    badge: 'Más vendido',
    blurb: 'Peluche de conejita con vestido a cuadros rosa, envuelto como ramo con celofán fucsia.',
    description:
      'Una tierna peluche de conejita vestida con delantal a cuadros rosa y blanco, envuelta estilo ramo con celofán fucsia y rosado y un moño de cintas curly XL. Viene acompañada de un frasco de crema de chocolate y una bolsita sorpresa, lista para regalar en cumpleaños.',
    details: ['Peluche de 30 cm aprox.', 'Envoltura tipo ramo con celofán', 'Incluye crema de chocolate'],
    image: '/images/peluches/peluches-01.webp',
  },
  {
    id: 'plush-stitch-recipe-love',
    name: 'Peluche Stitch Gigante con Caja de Dulces',
    category: 'peluches',
    price: 78,
    blurb: 'Peluche de Stitch tamaño gigante abrazando una caja de dulces surtidos y globos de corazón.',
    description:
      'Un enorme peluche de Stitch en tonos azul y lila que sostiene una caja transparente llena de dulces surtidos y una tarjeta de "receta para nuestro amor". Se acompaña de un arreglo de globos rojos con mensajes de amor, ideal para sorprender en San Valentín.',
    details: ['Peluche grande de Stitch', 'Caja de dulces surtidos incluida', 'Globos de corazón "Te Amo"'],
    image: '/images/peluches/peluches-02.webp',
  },
  {
    id: 'plush-stitch-gift-wrapped',
    name: 'Peluche Stitch Envuelto Sorpresa',
    category: 'peluches',
    price: 52,
    blurb: 'Peluche de Stitch envuelto en celofán con estrellitas y moño rosa XL, listo para regalar.',
    description:
      'Peluche de Stitch envuelto como ramo en celofán transparente con estampado de estrellitas plateadas, rematado con un gran moño de cinta rosa y abanico de papel crepé azul y rosado. Incluye detalles sorpresa de la colección Stitch escondidos dentro del empaque.',
    details: ['Peluche de Stitch mediano', 'Empaque celofán con estrellas', 'Moño de cinta rosa XL'],
    image: '/images/peluches/peluches-03.webp',
  },
  {
    id: 'friendship-day-gift-set',
    name: 'Combo Amor y Amistad Osos y Dulces',
    category: 'peluches',
    price: 85,
    blurb: 'Set de amor y amistad con oso de peluche, oso Care Bear azul, gatita blanca y dulces surtidos.',
    description:
      'Un combo completo para el Día del Amor y la Amistad: un oso de peluche clásico, un Care Bear azul, una gatita blanca con moño y un globo dorado, acompañados de snacks y chocolates surtidos en cajas decoradas. Perfecto para sorprender a esa persona especial con un detalle grande y variado.',
    details: ['3 peluches surtidos', 'Snacks y chocolates variados', 'Globo metálico incluido'],
    image: '/images/peluches/peluches-04.webp',
  },
  {
    id: 'plush-spiderman',
    name: 'Peluche Spiderman Trepamuros',
    category: 'peluches',
    price: 38,
    blurb: 'Peluche de Spiderman en rojo y azul con ojos grandes bordados, listo para regalar.',
    description:
      'Peluche de Spiderman de cuerpo completo, tejido en rojo y azul con la clásica telaraña bordada y ojos blancos en forma de gota. Un regalo ideal para los más fanáticos de los superhéroes, disponible solo o como parte de un detalle sorpresa con dulces.',
    details: ['Peluche de Spiderman mediano', 'Bordado tipo telaraña', 'Ideal para niños y fans Marvel'],
    image: '/images/peluches/peluches-05.webp',
  },
  {
    id: 'plush-teddy-love-balloons',
    name: 'Oso de Peluche con Globo Love',
    category: 'peluches',
    price: 62,
    blurb: 'Oso de peluche café claro con corazones metálicos en las patas y globo "Love" fucsia.',
    description:
      'Un clásico oso de peluche en tono café claro, con corazones metálicos fucsia bordados en ambas patas y un moño a juego en el cuello. Se entrega acompañado de un vistoso globo metalizado con la palabra "Love" y un ramillete de globos rosados y plateados.',
    details: ['Oso de peluche grande', 'Corazones metálicos en las patas', 'Globo "Love" + globos rosados'],
    image: '/images/peluches/peluches-06.webp',
  },
  {
    id: 'plush-cat-anniversary-candy',
    name: 'Peluche Gatito con Corazones y Dulces de Aniversario',
    category: 'peluches',
    price: 68,
    badge: 'Nuevo',
    blurb: 'Peluche de gatito gris con moño rojo, rodeado de dulces surtidos y globo "Feliz Aniversario".',
    description:
      'Peluche de gatito en gris y blanco con un lazo rojo al cuello, presentado en un arreglo con dos globos metálicos en forma de corazón espiral y un globo redondo de "Feliz Aniversario". Se completa con una selección de dulces y chicles surtidos, perfecto para celebrar una fecha especial.',
    details: ['Peluche de gatito con moño', 'Globos corazón + "Feliz Aniversario"', 'Dulces surtidos variados'],
    image: '/images/peluches/peluches-07.webp',
  },
  // Flores y otros
  {
    id: 'bouquet-red-roses-glitter',
    name: 'Ramo de Rosas Rojas con Brillantina',
    category: 'flores-y-otros',
    price: 48,
    badge: 'Más vendido',
    blurb: 'Docena de rosas rojas con toque de brillantina, envueltas en papel blanco y negro.',
    description:
      'Un ramo clásico de una docena de rosas rojas espolvoreadas con un delicado brillo de escarcha, envuelto en papel de líneas blanco y negro y rematado con un moño de cinta roja. El regalo perfecto para expresar un amor intenso y atemporal.',
    details: ['12 rosas rojas naturales', 'Toque de brillantina', 'Envoltura papel blanco y negro'],
    image: '/images/flores-otros/flores-otros-01.webp',
  },
  {
    id: 'bouquet-satin-roses-proposal',
    name: 'Ramo de Rosas en Tela "¿Quieres Ser Mi Novia?"',
    category: 'flores-y-otros',
    price: 40,
    blurb: 'Ramo de rosas en tela rosa palo y rojo con mariposas de papel y cinta "¿Quieres ser mi novia?".',
    description:
      'Un original ramo hecho con rosas de tela satinada en tonos rosa palo y rojo intenso, decorado con mariposas de papel troqueladas y una cinta dorada que pregunta "¿Quieres ser mi novia?". Envuelto en papel rosa y dorado, es la propuesta romántica perfecta.',
    details: ['Rosas de tela reutilizables', 'Cinta personalizada de propuesta', 'Mariposas decorativas de papel'],
    image: '/images/flores-otros/flores-otros-02.webp',
  },
  {
    id: 'bouquet-roses-ferrero-teamo',
    name: 'Ramo de Rosas con Ferrero Rocher y Globo Te Amo',
    category: 'flores-y-otros',
    price: 58,
    blurb: 'Rosas rojas combinadas con chocolates Ferrero Rocher y flor amarilla, más globo "Te Amo".',
    description:
      'Un ramo romántico de rosas rojas glitter combinado con seis chocolates Ferrero Rocher dorados y ramitas de flor amarilla silvestre, envuelto en papel rosa y kraft. Se corona con un globo redondo rojo que dice "Te Amo", ideal para aniversarios y declaraciones de amor.',
    details: ['Rosas rojas + 6 Ferrero Rocher', 'Flor amarilla de relleno', 'Globo redondo "Te Amo"'],
    image: '/images/flores-otros/flores-otros-03.webp',
  },
  {
    id: 'eternal-rose-glass-dome',
    name: 'Rosa Eterna en Cúpula de Cristal',
    category: 'flores-y-otros',
    price: 32,
    blurb: 'Rosa roja de tela en maceta con cúpula de cristal y mariposa decorativa, caja de regalo.',
    description:
      'Una elegante rosa roja artesanal en tela satinada, montada sobre un tallo verde metálico dentro de una macetita con piedritas decorativas, protegida por una cúpula de cristal transparente y acompañada de una mariposa. Presentada en caja blanca con ventana, inspirada en el clásico cuento de "la bella y la bestia".',
    details: ['Rosa artesanal bajo cúpula', 'Mariposa decorativa incluida', 'Caja blanca con ventana de regalo'],
    image: '/images/flores-otros/flores-otros-04.webp',
  },
  {
    id: 'handbag-tan-front-pockets',
    name: 'Bolso Tote Café con Bolsillos Frontales',
    category: 'flores-y-otros',
    price: 45,
    blurb: 'Bolso de mano café tipo tote con dos bolsillos frontales y detalles dorados.',
    description:
      'Bolso de mano en cuero sintético color café, con textura pebbled, dos bolsillos frontales con botón metálico dorado y asas reforzadas. Un accesorio versátil y elegante para el día a día, disponible en nuestra vitrina de bolsos y morrales.',
    details: ['Cuero sintético texturizado', '2 bolsillos frontales con botón', 'Asas dobles reforzadas'],
    image: '/images/flores-otros/flores-otros-05.webp',
  },
  {
    id: 'guadalupe-figurine-iridescent',
    name: 'Virgen de Guadalupe Nácar Iridiscente',
    category: 'flores-y-otros',
    price: 25,
    blurb: 'Figura de la Virgen de Guadalupe en resina con acabado nácar iridiscente.',
    description:
      'Figura religiosa de la Virgen de Guadalupe elaborada en resina con un llamativo acabado nacarado e iridiscente que cambia de tono según la luz. Disponible en varios colores pastel, es un detalle espiritual perfecto para bautizos, primeras comuniones o regalos del hogar.',
    details: ['Resina con acabado nácar', 'Varios tonos pastel disponibles', 'Ideal para bautizo o comunión'],
    image: '/images/flores-otros/flores-otros-06.webp',
  },
  {
    id: 'keychain-plush-cherries',
    name: 'Llavero Peluche Cerezas Enamoradas',
    category: 'flores-y-otros',
    price: 18,
    badge: 'Nuevo',
    blurb: 'Llavero de peluche en forma de par de cerezas rojas con carita bordada y lazo verde.',
    description:
      'Tierno llavero de peluche esponjoso con forma de dos cerezas rojas unidas, cada una con ojitos bordados y un lazo verde a modo de hojas. Un detalle pequeño y divertido para decorar bolsos, morrales o regalar como accesorio sorpresa.',
    details: ['Peluche suave tipo cereza doble', 'Argolla dorada resistente', 'Tamaño ideal para bolsos'],
    image: '/images/flores-otros/flores-otros-07.webp',
  },
]

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug)
}

export function getProduct(id: string) {
  return products.find((p) => p.id === id)
}
