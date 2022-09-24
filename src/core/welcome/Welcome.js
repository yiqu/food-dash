import styles from './Welcome.module.scss';

const WelcomeMessage = () => {

  return (
    <div className={ `${styles.parent} poppins container font-weight-bold` }>
      <section className={ `${styles.message} w-100` }>
        <div className={ styles.top }>
          Restaurants and more,
        </div>
        <div className={ styles.bottom }>
          delivered to your door
        </div>
      </section>
    </div>
  );
};

export default WelcomeMessage;