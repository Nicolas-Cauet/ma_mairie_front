import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  Accordion, Button, Icon, Label, Confirm,
} from 'semantic-ui-react';
import Moment from 'react-moment';
import { setActiveIndex } from '../../../actions/reports';

// import './style.scss';

function Report({
  reporting_id, title, created_at, reporting_category, user_text,
}) {
  const dispatch = useDispatch();
  const { activeIndex } = useSelector((state) => state.reports);
  const { logged } = useSelector((state) => state.login);

  //   useEffect (() =>{
  //     dispatch((getReports()));
  //   })

  const handleClickAccordion = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;
    dispatch(setActiveIndex(newIndex));
  };

  return (
    <>
      {/* Section for reports list */}
      <section className="reports-container">

        {/* Accordion list of reports */}
        <Accordion fluid styled className="accordion">

          {/* Accordion modele */}
          <>
            <Accordion.Title
              active={activeIndex === reporting_id}
              index={reporting_id}
              onClick={handleClickAccordion}
              className="accordion-title"
            >
              <div className="accordion-title-container">
                <h1>{title}</h1>
                <h2><Moment format="DD/MM/YYYY">{created_at}</Moment></h2>
                <Label color="yellow">
                  Catégorie:
                  {' '}
                  {reporting_category}
                </Label>
                <Label color="red">
                  Statut: Refusé
                </Label>
                <div>
                  <Icon name="caret square down outline" />
                  Description
                </div>
              </div>
            </Accordion.Title>

            <Accordion.Content active={activeIndex === reporting_id}>
              <p>
                {user_text}
              </p>
              { logged && (
                <div className="reports-button">
                  <Button>Traiter le signalement</Button>
                  <Button>Supprimer</Button>
                  <Confirm />
                </div>
              )}

            </Accordion.Content>
          </>
        </Accordion>
      </section>
    </>
  );
}

Report.propTypes = {
  reporting_id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  reporting_category: PropTypes.string.isRequired,
  user_text: PropTypes.string.isRequired,
};

export default Report;
