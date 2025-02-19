import { memo } from 'react';
import styles from './Settings.module.scss';

const Settings = memo(() => {
  return (
    <div className={styles.container}>
      <h1>Settings</h1>
    </div>
  );
});

export default Settings;
