// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Accordion, Button, Icon, Label } from 'semantic-ui-react'
import { setActiveIndex } from '../../actions/reports';


import './style.scss';

function Reports() {
  const dispatch = useDispatch();
  const { activeIndex } = useSelector((state) => state.reports);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps
    // const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    // this.setState({ activeIndex: newIndex })
    dispatch(setActiveIndex(newIndex))

  }

    return (
      <section className='reports-container'>
        <Button className='reporting-button'>
          <Icon name='warning sign' />
          <p>Signaler</p>
        </Button>

        <Accordion fluid styled className='accordion'>

          {/* Accordion modele */}
          <Accordion.Title
            className='accordion-title'
            active={activeIndex === 0}
            index={0}
            onClick={handleClick}
          >
            <div className='accordion-title-container'>
              <h1>Le chien du voisin s'est enfui</h1>
              <h2>22/06/222</h2>
              <Label color='blue'>
              Catégorie: Route
              </Label>
              <Label color='green'>
              Statut: Résolu
              </Label>
              <div>
                <Icon name='caret square down outline' />
                  Description
              </div>
            </div>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <p>
              A dog is a type of domesticated animal. Known for its loyalty and
              faithfulness, it can be found as a welcome guest in many households
              across the world. A dog is a type of domesticated animal. Known for its loyalty and
              faithfulness, it can be found as a welcome guest in many households
              across the world.
              A dog is a type of domesticated animal. Known for its loyalty and
              faithfulness, it can be found as a welcome guest in many households
              across the world.
              A dog is a type of domesticated animal. Known for its loyalty and
              faithfulness, it can be found as a welcome guest in many households
              across the world.
              A dog is a type of domesticated animal. Known for its loyalty and
              faithfulness, it can be found as a welcome guest in many households
              across the world.
            </p>
          </Accordion.Content>
          {/* Accordion modele */}

          <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={handleClick}
            className='accordion-title'
          >
            <div className='accordion-title-container'>
              <h1>La voisine s'est enfuie</h1>
              <h2>23/06/222</h2>
              <Label color='yellow'>
              Catégorie: Voisinage
              </Label>
              <Label color='orange'>
              Statut: En cours
              </Label>
              <div>
                <Icon name='caret square down outline' />
                  Description
              </div>
            </div>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <p>
              A dog is a type of domesticated animal. Known for its loyalty and
              faithfulness, it can be found as a welcome guest in many households
              across the world.
              A dog is a type of domesticated animal. Known for its loyalty and
              faithfulness, it can be found as a welcome guest in many households
              across the world.
              A dog is a type of domesticated animal. Known for its loyalty and
              faithfulness, it can be found as a welcome guest in many households
              across the world.
              A dog is a type of domesticated animal. Known for its loyalty and
              faithfulness, it can be found as a welcome guest in many households
              across the world.
              A dog is a type of domesticated animal. Known for its loyalty and
              faithfulness, it can be found as a welcome guest in many households
              across the world.
            </p>
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 2}
            index={2}
            onClick={handleClick}
            className='accordion-title'
          >
            <div className='accordion-title-container'>
              <h1>Le voisin est tout seul</h1>
              <h2>24/06/222</h2>
              <Label color='yellow'>
              Catégorie: Voisinage
              </Label>
              <Label color='red'>
              Statut: Refusé
              </Label>
              <div>
                <Icon name='caret square down outline' />
                  Description
              </div>
            </div>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            <p>
              A dog is a type of domesticated animal. Known for its loyalty and
              faithfulness, it can be found as a welcome guest in many households
              across the world.
              A dog is a type of domesticated animal. Known for its loyalty and
              faithfulness, it can be found as a welcome guest in many households
              across the world. A dog is a type of domesticated animal. Known for its loyalty and
              faithfulness, it can be found as a welcome guest in many households
              across the world. A dog is a type of domesticated animal. Known for its loyalty and
              faithfulness, it can be found as a welcome guest in many households
              across the world.
            </p>
          </Accordion.Content>
        </Accordion>
      </section>
  );
}

// Reports.propTypes = {

// };

export default Reports;
