import { Icon } from 'semantic-ui-react';
import {
  SET_ACTIVE_INDEX,
  SET_ACTIVE_INDEX_TERMS,
  TOGGLE_REPORTING,
  SAVE_REPORTS,
  SAVE_ADMIN_REPORTS,
  DELETE_SELECTED_REPORT,
  CHANGE_REPORTS_FILTER,
  RESET_REPORTS_FILTER,
  UPDATE_FILTERED_REPORTS,
} from '../actions/reports';

export const initialState = {
  activeIndex: -1,
  activeIndexTerms: -1,
  isReporting: false,
  reportsList: [],
  reportsAdminList: [],
  filteredReports: [],
  selectedCategory: '',
  selectedMonth: '',
  selectedYear: '',
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
    },
    {
      key: 'Février',
      text: 'Février',
      value: 'Février',
    },
    {
      key: 'Mars',
      text: 'Mars',
      value: 'Mars',
    },
    {
      key: 'Avril',
      text: 'Avril',
      value: 'Avril',
    },
    {
      key: 'Mai',
      text: 'Mai',
      value: 'Mai',
    },
    {
      key: 'Juin',
      text: 'Juin',
      value: 'Juin',
    },
    {
      key: 'Juillet',
      text: 'Juillet',
      value: 'Juillet',
    },
    {
      key: 'Aout',
      text: 'Aout',
      value: 'Aout',
    },
    {
      key: 'Septembre',
      text: 'Septembre',
      value: 'Septembre',
    },
    {
      key: 'Octobre',
      text: 'Octobre',
      value: 'Octobre',
    },
    {
      key: 'Novembre',
      text: 'Novembre',
      value: 'Novembre',
    },
    {
      key: 'Décembre',
      text: 'Décembre',
      value: 'Décembre',
    },
  ],
  yearOptions: [
    {
      key: 'Année',
      text: 'Année',
      value: 'Année',
    },
    {
      key: '2021',
      text: '2021',
      value: '2021',
    },
    {
      key: '2022',
      text: '2022',
      value: '2022',
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
    case DELETE_SELECTED_REPORT:
      return {
        ...state,
        id: action.id,
      };
    case CHANGE_REPORTS_FILTER:
      return {
        ...state,
        [action.key]: action.value,
      };
    case RESET_REPORTS_FILTER:
      return {
        ...state,
        selectedCategory: '',
        selectedMonth: '',
        selectedYear: '',
      };
    case UPDATE_FILTERED_REPORTS:
      return {
        ...state,
        filteredReports: action.filteredReports,
      };
    default:
      return state;
  }
};

export default reducer;
