const crearContenido = ({ contexto, imagenes, impacto, herramientas }) => (
  <>
    <p>{contexto}</p>
    <img className="detalle-imagen" src={imagenes[0]} alt="" />
    <p>{impacto}</p>
    <img className="detalle-imagen" src={imagenes[1]} alt="" />
    <p>
      <strong>Stack y herramientas:</strong> {herramientas}
    </p>
  </>
);

const crearTrabajo = ({
  id,
  categoria,
  thumb,
  alt,
  nombre,
  tipo,
  contexto,
  impacto,
  herramientas,
  imagenes,
}) => ({
  id,
  categoria,
  thumb: {
    url: thumb,
    alt,
  },
  info: {
    nombre,
    categoria: tipo,
    contenido: crearContenido({ contexto, imagenes, impacto, herramientas }),
  },
});

const trabajos = [
  crearTrabajo({
    id: 1,
    categoria: "microsoft-365",
    thumb: "./assets/trabajos/desarrollo-1.png",
    alt: "Administracion de Microsoft 365 y accesos corporativos",
    nombre: "Gestion Microsoft 365",
    tipo: "Microsoft 365",
    contexto:
      "Administre usuarios, licencias, correos, permisos y seguridad en entornos corporativos donde la continuidad del servicio era critica.",
    impacto:
      "Ordene accesos, apoye onboarding y offboarding, gestione respaldos y reduje friccion operativa con documentacion clara para usuarios y equipos internos.",
    herramientas:
      "Exchange, SharePoint, OneDrive, Power Automate, Microsoft 365, Active Directory y PowerShell.",
    imagenes: ["./assets/trabajos/desarrollo-1.png", "./assets/trabajos/1.png"],
  }),
  crearTrabajo({
    id: 2,
    categoria: "automatizacion",
    thumb: "./assets/trabajos/ticketapps.png",
    alt: "Sistema interno de tickets con Power Apps y SharePoint",
    nombre: "Sistema interno de tickets",
    tipo: "Automatizacion",
    contexto:
      "Implemente un flujo interno para registrar, atender y dar seguimiento a incidencias de TI con mayor trazabilidad.",
    impacto:
      "El proceso centralizo solicitudes, ayudo a priorizar casos y dejo una base mas ordenada para medir responsables, estados y tiempos de atencion.",
    herramientas:
      "Power Apps, SharePoint, Microsoft 365, Power Automate y buenas practicas de mesa de ayuda.",
    imagenes: [
      "./assets/trabajos/sofware-dev-1.png",
      "./assets/trabajos/desarrollo-2.png",
    ],
  }),
  crearTrabajo({
    id: 3,
    categoria: "infraestructura-ti",
    thumb: "./assets/trabajos/desarrollo-2.png",
    alt: "Soporte N1 y N2 para infraestructura TI",
    nombre: "Soporte N1/N2 e infraestructura",
    tipo: "Infraestructura TI",
    contexto:
      "Atendi soporte tecnico presencial y remoto, mantenimiento preventivo y correctivo, equipos, software, moviles y perifericos.",
    impacto:
      "Asegure continuidad operativa, coordine cambios con menor impacto y apoye controles criticos, respaldos y seguridad de la informacion.",
    herramientas:
      "Windows, Linux, TCP/IP, DHCP, Active Directory, antivirus, firewalls y gestion de activos TI.",
    imagenes: ["./assets/trabajos/desarrollo-2.png", "./assets/trabajos/3.png"],
  }),
  crearTrabajo({
    id: 4,
    categoria: "datos-ia",
    thumb: "./assets/trabajos/apps-1.png",
    alt: "Modelo hibrido de IA para clasificacion con senales EEG",
    nombre: "Modelo IA para senales EEG",
    tipo: "Datos e IA",
    contexto:
      "Publique en Springer un articulo cientifico sobre deteccion de alcoholismo desde senales EEG usando modelos hibridos de Machine Learning y Deep Learning.",
    impacto:
      "Integre preparacion de datos, entrenamiento y evaluacion de modelos para construir un enfoque de clasificacion con base academica y aplicacion tecnica real.",
    herramientas:
      "Python, Keras, TensorFlow, NumPy, scikit-learn, Pandas, Matplotlib y Seaborn.",
    imagenes: ["./assets/trabajos/apps-1.png", "./assets/trabajos/apps-2.png"],
  }),
  crearTrabajo({
    id: 5,
    categoria: "desarrollo-web",
    thumb: "./assets/trabajos/diseño-1.png",
    alt: "Comunicados tecnicos creados con HTML y CSS",
    nombre: "Comunicados tecnicos HTML/CSS",
    tipo: "Desarrollo Web",
    contexto:
      "Cree comunicados tecnicos para informar incidencias, actualizaciones y guias de uso a usuarios internos.",
    impacto:
      "Transforme mensajes operativos en piezas claras y legibles, utiles para reducir dudas repetidas y mejorar la comunicacion del area de TI.",
    herramientas:
      "HTML5, CSS, comunicacion tecnica, criterios visuales y herramientas colaborativas.",
    imagenes: ["./assets/trabajos/diseño-1.png", "./assets/trabajos/diseño-2.png"],
  }),
  crearTrabajo({
    id: 6,
    categoria: "infraestructura-ti",
    thumb: "./assets/trabajos/desarrollo-3.png",
    alt: "Administracion de redes corporativas LAN WAN VLAN PoE y Wi-Fi",
    nombre: "Redes corporativas",
    tipo: "Infraestructura TI",
    contexto:
      "Administre y di soporte a redes LAN/WAN, VLANs, PoE y Wi-Fi corporativo en coordinacion con proveedores y equipos internos.",
    impacto:
      "Aporte estabilidad a servicios de conectividad, soporte a infraestructura critica y documentacion para mejoras tecnologicas.",
    herramientas:
      "LAN/WAN, VLAN, PoE, Wi-Fi corporativo, TCP/IP, DHCP, firewalls y documentacion tecnica.",
    imagenes: ["./assets/trabajos/desarrollo-3.png", "./assets/trabajos/4.png"],
  }),
  crearTrabajo({
    id: 7,
    categoria: "automatizacion",
    thumb: "./assets/trabajos/sofware-dev-2.png",
    alt: "Sistema interno de inventario para el area de sistemas",
    nombre: "Sistema interno de inventario",
    tipo: "Automatizacion",
    contexto:
      "Desarrolle una base de control para inventario del area de sistemas, orientada al seguimiento de equipos y activos.",
    impacto:
      "Facilite reportes mensuales, bajas seguras, trazabilidad de equipos y una gestion mas ordenada para decisiones del area TI.",
    herramientas:
      "Gestion de activos TI, documentacion, control de equipos, reportes y mejora continua.",
    imagenes: [
      "./assets/trabajos/sofware-dev-2.png",
      "./assets/trabajos/sofware-dev-3.png",
    ],
  }),
  crearTrabajo({
    id: 8,
    categoria: "datos-ia",
    thumb: "./assets/trabajos/apps-2.png",
    alt: "Reportes de Power BI y documentacion de infraestructura TI",
    nombre: "Reportes y documentacion TI",
    tipo: "Datos e IA",
    contexto:
      "Elabore reportes, documentacion de infraestructura e indicadores para hacer mas visible el estado de operaciones TI.",
    impacto:
      "Converti informacion tecnica dispersa en reportes accionables para seguimiento, capacitacion y toma de decisiones.",
    herramientas:
      "Power BI, Excel, Microsoft 365, documentacion tecnica y analisis de datos.",
    imagenes: ["./assets/trabajos/apps-2.png", "./assets/trabajos/apps-3.png"],
  }),
  crearTrabajo({
    id: 9,
    categoria: "microsoft-365",
    thumb: "./assets/trabajos/1.png",
    alt: "Onboarding y offboarding de usuarios, equipos y accesos",
    nombre: "Onboarding y offboarding TI",
    tipo: "Microsoft 365",
    contexto:
      "Gestione altas, bajas, perfiles, correos, permisos y accesos para nuevos ingresos y salidas de personal.",
    impacto:
      "Asegure entregas ordenadas de equipos y accesos, reduciendo riesgos por cuentas activas, permisos incorrectos o informacion sin respaldo.",
    herramientas:
      "Microsoft 365, Active Directory, SharePoint, gestion de licencias, inventario y documentacion tecnica.",
    imagenes: ["./assets/trabajos/1.png", "./assets/trabajos/2.png"],
  }),
  crearTrabajo({
    id: 10,
    categoria: "infraestructura-ti",
    thumb: "./assets/trabajos/4.png",
    alt: "Seguridad informatica, respaldos, antivirus y firewalls",
    nombre: "Seguridad y respaldos",
    tipo: "Infraestructura TI",
    contexto:
      "Supervise controles basicos de seguridad, respaldos, antivirus, firewalls y buenas practicas para usuarios finales.",
    impacto:
      "Fortaleci continuidad operativa y cumplimiento de controles criticos en entornos donde disponibilidad e informacion eran prioridad.",
    herramientas:
      "Antivirus, firewalls, respaldos, Active Directory, SharePoint, seguridad para usuarios finales y controles ISO/BASC.",
    imagenes: ["./assets/trabajos/4.png", "./assets/trabajos/7.png"],
  }),
  crearTrabajo({
    id: 11,
    categoria: "desarrollo-web",
    thumb: "./assets/trabajos/5.png",
    alt: "Diseno de interfaces y prototipos con Figma",
    nombre: "Prototipos UI y mejora visual",
    tipo: "Desarrollo Web",
    contexto:
      "Diseñe interfaces y estructuras visuales para presentar informacion tecnica de forma clara, usable y consistente.",
    impacto:
      "Aporte una mirada funcional a soluciones internas, comunicados y flujos de soporte para que los usuarios comprendan mejor cada proceso.",
    herramientas:
      "Figma, HTML5, CSS, JavaScript, criterios de usabilidad y comunicacion visual.",
    imagenes: ["./assets/trabajos/5.png", "./assets/trabajos/diseño-3.png"],
  }),
  crearTrabajo({
    id: 12,
    categoria: "automatizacion",
    thumb: "./assets/trabajos/6.png",
    alt: "Capacitacion, manuales y mejora continua en herramientas TI",
    nombre: "Manuales y capacitacion TI",
    tipo: "Automatizacion",
    contexto:
      "Elabore manuales, inducciones y capacitaciones para usuarios sobre sistemas, equipos y herramientas colaborativas.",
    impacto:
      "Reduje dependencia del soporte repetitivo y mejore la adopcion de herramientas mediante guias claras, acompanamiento y documentacion.",
    herramientas:
      "Microsoft 365, Google Workspace, documentacion, capacitacion tecnica, mejora continua y soporte a usuarios.",
    imagenes: ["./assets/trabajos/6.png", "./assets/trabajos/8.png"],
  }),
];

export default trabajos;
