import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

/* Reusable component, which handles button navigation from page to page */
function NavigationButton({ to, buttonText, variant = 'primary', ...props }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
    window.scrollTo(0, 0); /* Go to top of the page */
  };

  return (
    <div className="col-12 text-center mb-3">
      <Button variant={variant} onClick={handleClick} {...props}>
        {buttonText}
      </Button>
    </div>
  );
}

export default NavigationButton;