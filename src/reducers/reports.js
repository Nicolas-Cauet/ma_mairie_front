import { Icon } from 'semantic-ui-react';
import {
  SET_ACTIVE_INDEX,
  SET_ACTIVE_INDEX_TERMS,
  TOGGLE_REPORTING,
  SAVE_REPORTS,
  SAVE_ADMIN_REPORTS,
  CHANGE_CHECKBOX_ADMIN_REPORTING,
} from '../actions/reports';

export const initialState = {
  activeIndex: -1,
  activeIndexTerms: -1,
  isReporting: false,
  reportsList: [],
  reportsAdminList: [],
  text: '',
  // reporting_statut: '',
  categoriesOptions: [
    {
      // key: 'Catégories',
      text: 'Catégories',
      value: 'Catégories',
    },
    {
      // key: 'Voirie',
      text: (<Icon className="dropdown-icon" name="road"> Voirie</Icon>),
      value: 'Voirie',
    },
    {
      // key: 'Eclairage public',
      text: (<Icon className="dropdown-icon" name="lightbulb"> Eclairage public</Icon>),
      value: 'Eclairage public',
    },
    {
      // key: 'Voisinage',
      text: (<Icon className="dropdown-icon" name="users"> Voisinage</Icon>),
      value: 'Voisinage',
    },
    {
      // key: 'Ramassage des déchets',
      text: (<Icon className="dropdown-icon" name="trash"> Ramassage des déchets</Icon>),
      value: 'Ramassage des déchets',
    },
    {
      // key: 'Objets trouvé/perdu',
      text: (<Icon className="dropdown-icon" name="key"> Objets trouvé/perdu</Icon>),
      value: 'Objets trouvé/perdu',
    },
    {
      // key: 'Autre',
      text: (<Icon className="dropdown-icon" name="bullhorn"> Autre</Icon>),
      value: 'Autre',
    },
  ],
  monthOptions: [
    {
      key: 'Mois',
      text: 'Mois',
      value: 'Mois',
    },
    {
      key: 'Janvier',
      text: 'Janvier',
      value: 'Janvier',
      // image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
    },
    {
      key: 'Février',
      text: 'Février',
      value: 'Février',
      // image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
    },
  ],
  yearOptions: [
    {
      key: 'Année',
      text: 'Année',
      value: 'Année',
      // image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
    },
    {
      key: '2021',
      text: '2021',
      value: '2021',
      // image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
    },
    {
      key: '2022',
      text: '2022',
      value: '2022',
      // image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
    },
  ],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // Management of accordion section of report
    case SET_ACTIVE_INDEX:
      return {
        ...state,
        activeIndex: action.activeIndex,
        id: action.id,
      };
    case SET_ACTIVE_INDEX_TERMS:
      return {
        ...state,
        activeIndexTerms: action.activeIndexTerms,
      };
    case TOGGLE_REPORTING:
      return {
        ...state,
        isReporting: !state.isReporting,
      };
    case SAVE_REPORTS:
      return {
        ...state,
        reportsList: action.payload,
      };
    case SAVE_ADMIN_REPORTS:
      return {
        ...state,
        reportsAdminList: action.payload,
      };
    case CHANGE_CHECKBOX_ADMIN_REPORTING:
      return {
        ...state,
        reporting_statut: action.reporting_statut,
      };
    default:
      return state;
  }
};

export default reducer;
