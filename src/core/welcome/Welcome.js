import styles from './Welcome.module.scss';

const WelcomeMessage = () => {

  return (
    <div className={ `${styles.parent} poppins container` }>
      <section className={ `${styles.message} w-100` }>
        <div>
          Restaurants and more,
        </div>
        <div>
          delivered to your door
        </div>
      </section>
    </div>
  );
};

export default WelcomeMessage;