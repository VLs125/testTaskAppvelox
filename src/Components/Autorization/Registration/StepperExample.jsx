import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Check from "@material-ui/icons/Check";
import StepConnector from "@material-ui/core/StepConnector";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import './Stepper.scss'
const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)"
  },
  active: {
    "& $line": {
      borderColor: "#784af4"
    }
  },
  completed: {
    "& $line": {
      borderColor: "#784af4"
    }
  },
  line: {
    borderColor: "#eaeaf0",
    borderTopWidth: 1,
    borderRadius: 1
  }
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center"
  },
  active: {
    color: "#784af4"
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: "50%",
    backgroundColor: "currentColor"
  },
  completed: {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18
  }
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;
  const icons = {
    1: 1,
    2: 2,
    3: 3
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
          <div className={classes.circle} />
        )}
      {icons[String(props.icon)]}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  icon: PropTypes.node
};




const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  button: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  }
}));



function getSteps() {
  return ["Данные для входа", "Личная информация", "Представители"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <form className='registration-form'>
        <label >
          <input className='registration-label-email' type="email" name="email" placeholder='Почта' />
          <br />
          <input className='registration-label-phone' type="text" name="phone" placeholder='Телефон' />
          <br />
          <input className='registration-label-password' type="password" name="password" placeholder='Пароль' />
          <br />
          <input className='registration-label-repeatPassword' type="password" name="repeatPassword" placeholder=' Повторите пароль' />
          <div className='registration-text-bottom'>
          <input className='registration-label-checkbox' type="checkbox" name="agree" />
          <span className='registration-label-textAgree'>Я согласен на:</span>
          </div>
          <div>
          <ul>
          <li><a target="_blank" href="http://www.consultant.ru/document/cons_doc_LAW_61801/">Обработку персональных данных(ФЗ 152)</a></li>
          <li>Передачу персональных данных третьим лицам</li>
          <li>Обращение для информирования и напоминания</li>
          </ul>
          </div>
     
        </label>


      </form>;
    case 1:
      return <form className='registration-form'>
        <label >
          <input className='registration-label-surname' type="text" name="surname" placeholder='Фамилия' />
          <br />
          <input className='registration-label-name' type="text" name="name" placeholder='Имя' />
          <br />
          <input className='registration-label-middlename' type="text" name="middlename" placeholder='Отчество' />
          <br />
          <div className='registration-container-sex'>
          <span className='registration-sex-text'>Пол:</span>
          <div className='registration-radio-btn'>	<input id="radio-1" type="radio" name="radio" value="M" checked/>
	        <label for="radio-1">М</label> 
          </div>
          <div className='registration-radio-btn'><input id="radio-2" type="radio" name="radio" value="G"/>
	        <label for="radio-2">Ж</label></div>
          <div>
          <TextField
        id="date"
        label="Birthday"
        type="date"
        defaultValue="dd-mm-YYYY"
        InputLabelProps={{
          shrink: true,
        }}></TextField>
        </div>
        </div>
          <br />
          <input className='registration-label-adressRegistration' type="text" name="middlename" placeholder='Адрес регистрации' />
          <br />
          <input className='registration-label-adressLocation' type="text" name="middlename" placeholder='Адрес места жительства' />
         
        </label>


      </form>;
    case 2:
      return <form className='registration-form'>
        <label >
          <input className='registration-label-familySurname' type="text" name="surname" placeholder='Фамилия' />
          <br />
          <input className='registration-label-familyName' type="text" name="name" placeholder='Имя' />
          <br />
          <input className='registration-label-familyMiddlename' type="text" name="middlename" placeholder='Отчество' />
          <br />
          <input className='registration-label-familyPhone' type="text" name="phone" placeholder='Телефон' />
        </label>


      </form>;;
    default:
      return "Unknown step";
  }
}

export default function StepperExample() {
 const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();


  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <div className={classes.root}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<QontoConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
  
          <Typography className={classes.instructions}>
            {getStepContent(activeStep)}
          </Typography>
            <div className='registration-button-container'>
            <button onClick={handleNext} className='registration-button' type="submit">{activeStep === steps.length - 1 ? "Зарегистрироваться" : "Далее"}</button>            
            </div>
       

    
    </div>
  );
}
