import styles from './form.module.scss';

export default () => (
  <form
    className={styles.form}
    method='POST'
    action='https://ryanmorimoto.activehosted.com/proc.php'
  >
    <input type='hidden' name='u' value='1' />
    <input type='hidden' name='f' value='1' />
    <input type='hidden' name='s' />
    <input type='hidden' name='c' value='0' />
    <input type='hidden' name='m' value='0' />
    <input type='hidden' name='act' value='sub' />
    <input type='hidden' name='v' value='2' />
    <label className={styles.title}>
      <h2>Sign up now and receive a free cheat sheet and coaching call</h2>
    </label>

    <div className={styles.wrapper}>
      <div>
        <div>
          <input
            className={styles.input}
            type='text'
            name='fullname'
            placeholder='Your name'
            required
          />
        </div>
      </div>
      <div>
        <div>
          <input
            className={styles.input}
            type='text'
            name='email'
            placeholder='Email Address'
            required
          />
        </div>
      </div>
      <div className={styles.consent}>
        <div>
          <p>
            By entering your email, you agree to receive marketing emails from Ryan Morimoto.
          </p>
        </div>
      </div>
      <div>
        <div>
          <button className={styles.button} type='submit' required>
            SIGN UP TODAY
          </button>
        </div>
      </div>
    </div>
  </form>
);
