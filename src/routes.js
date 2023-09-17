import {
  AccountBalance as AccountBalanceIcon,
  Assignment as AssignmentIcon,
  AttachMoney as AttachMoneyIcon,
  BusinessRounded as BusinessIcon,
  Contacts as ContactIcon,
  Dashboard as DashboardIcon,
  Description as DescriptionIcon,
  Euro as EuroIcon,
  EventNote as EventNoteIcon,
  GroupAdd as GroupAddIcon,
  Payment as PaymentsIcon,
  Receipt as ReceiptIcon,
  Send as SendIcon,
  ViewList as ViewListIcon,
  Work as WorkIcon
} from "@material-ui/icons";

export default [
  {
    id: "Tableau de bord",
    path: "/1",
    icon: <DashboardIcon />,
    component: null,
    containsHome: true
  },
  "------",
  "Porté",
  { id: "Portés", path: "/2", icon: <GroupAddIcon />, component: null },
  {
    id: "Conventions de portage",
    path: "/3",
    icon: <AssignmentIcon />,
    component: null
  },
  {
    id: "Contrats de travail",
    path: "/4",
    icon: <WorkIcon />,
    component: null
  },
  { id: "Clients", path: "/5", icon: <BusinessIcon />, component: null },
  { id: "Contacts", path: "/6", icon: <ContactIcon />, component: null },
  {
    id: "Contrats Commerciaux",
    path: "/7",
    icon: <DescriptionIcon />,
    component: null,
    children: [
      { id: "Tous", path: "/8", component: null },
      {
        id: "Initialisés",
        path: "/9",
        component: null,
        badge: 1
      },
      { id: "Actifs", path: "/10", component: null, badge: 3 },
      {
        id: "Terminés",
        path: "/11",
        component: null,
        badge: 5
      }
    ]
  },
  {
    id: "Demandes de facturations",
    path: "/12",
    icon: <SendIcon />,
    component: null,
    children: [
      { id: "À valider", path: "/13", component: null },
      { id: "En cours", path: "/14", component: null },
      { id: "Facturés", path: "/15", component: null }
    ]
  },
  {
    id: "Rapport d'activité",
    path: "/16",
    icon: <EventNoteIcon />,
    component: null
  },
  "------",
  "Compta",
  {
    id: "Frais",
    path: "/17",
    icon: <EuroIcon />,
    component: null,
    children: [
      { id: "En attente", path: "/18", component: null },
      { id: "À valider", path: "/19", component: null },
      { id: "Enregistrés", path: "/20", component: null }
    ]
  },
  {
    id: "Factures enregistrés",
    path: "/21",
    icon: <ReceiptIcon />,
    component: null
  },
  {
    id: "Avoirs enregistrés",
    path: "/22",
    icon: <ReceiptIcon />,
    component: null
  },
  { id: "Règlements", path: "/23", icon: <AttachMoneyIcon />, component: null },
  "------",
  "Activité",
  {
    id: "Correction manuelle compte d'activité",
    path: "/24",
    icon: <ViewListIcon />,
    component: null
  },
  {
    id: "Compte d'activité",
    path: "/25",
    icon: <AccountBalanceIcon />,
    component: null
  },
  {
    id: "Préparation de paies",
    path: "/26",
    icon: <PaymentsIcon />,
    component: null
  },
  {
    id: "Import de paye",
    path: "/27",
    icon: <AccountBalanceIcon />,
    component: null
  },
  { id: "Paies", path: "/28", icon: <AccountBalanceIcon />, component: null }
];
