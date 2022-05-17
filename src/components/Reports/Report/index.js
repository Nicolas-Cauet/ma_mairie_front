import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Accordion,
  Button,
  Icon,
  Label,
  Confirm,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { deleteSelectedReport, getAdminReports, setActiveIndex } from '../../../actions/reports';

// import './style.scss';

function Report({
  reporting_id, title, created_at, reporting_category, user_text, reporting_statut, admin_text,
}) {
  const dispatch = useDispatch();
  const { activeIndex } = useSelector((state) => state.reports);
  const { logged } = useSelector((state) => state.login);

  const reports = useSelector((state) => state.reports.reportsList);
  console.log(reports);

  const handleClickAccordion = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;
    dispatch(setActiveIndex(newIndex));
  };

  const [confirm, setConfirm] = useState(false);

  const toggleDeleteConfirm = () => {
    setConfirm(!confirm);
  };

  const confirmDeleteReport = () => {
    dispatch(deleteSelectedReport(reporting_id));
    setConfirm(false);
    dispatch(getAdminReports());
  };

  return (
    <>
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
                Catégorie : {reporting_category}
              </Label>
              <Label color="red">
                Statut : {reporting_statut}
              </Label>
              <div>
                <Icon name="caret square down outline" />
                En savoir plus
              </div>
            </div>
          </Accordion.Title>

          <Accordion.Content active={activeIndex === reporting_id}>
            <p>
              Description : {user_text}
            </p>
            <p>
              Réponse de la mairie : {admin_text}
            </p>
            {logged && window.location.pathname.includes('admin') && (
              <div className="reports-button">
                <Link to={`/admin/reports/1/${reporting_id}`}>
                  <Button>Traiter le signalement</Button>
                </Link>
                <Button onClick={toggleDeleteConfirm}>Supprimer</Button>
                <Confirm
                  report="coucou"
                  content="Êtes-vous sûr de vouloir supprimer ce signalement ?"
                  cancelButton="Annuler"
                  confirmButton="Supprimer"
                  open={confirm}
                  onCancel={toggleDeleteConfirm}
                  onConfirm={confirmDeleteReport}
                />
              </div>
            )}

          </Accordion.Content>
        </>
      </Accordion>
    </>
  );
}

Report.propTypes = {
  reporting_id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  reporting_category: PropTypes.string.isRequired,
  user_text: PropTypes.string.isRequired,
  reporting_statut: PropTypes.string.isRequired,
  admin_text: PropTypes.string,
};

Report.defaultProps = {
  admin_text: null,
};

export default Report;
