import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

//import DashboardIcon from '@material-ui/icons/Dashboard';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import EventIcon from '@material-ui/icons/Event';
import DevicesIcon from '@material-ui/icons/Devices';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

import Link from '@material-ui/core/Link';
//import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
//import AssignmentIcon from '@material-ui/icons/Assignment';


export const mainListItems = (
  
  <div>
    <ListItem button>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button >
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="Perfil" />
    </ListItem> 
  </div>
);

export const actionListItems = (
  
  <div>
    <ListSubheader inset>Ações</ListSubheader>
    
    <ListItem button>
      <ListItemIcon>
        <AddCircleOutlineIcon />
      </ListItemIcon>
      <ListItemText primary="Novo Empréstimo" />
    </ListItem>
    
    <ListItem button >
      <ListItemIcon>
        <EventIcon />
      </ListItemIcon>
      <ListItemText primary="Agendar Nova Reunião" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <PowerSettingsNewIcon />
      </ListItemIcon>
      <ListItemText primary="Encerrar sessão" />
    </ListItem>

  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Gerenciamento</ListSubheader>
    
    <ListItem button>
      <ListItemIcon>
        <DevicesIcon />
      </ListItemIcon>
      <ListItemText primary="Dispositivos" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Projetos" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <MeetingRoomIcon />
      </ListItemIcon>
      <ListItemText primary="Salas de Reuniões" />
    </ListItem>




  </div>
);