import styles from './wallet.module.scss';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

const Wallet = () => {
  return (
    <div className="flex w-full h-full p-0 space-x-10 tao-bg">
      {/* Sidebar */}
      <div className="w-[25%] p-5 pink-bg rounded-lg h-full">
        <div className="mt-3 w-full p-2 light-yellow-bg text-white rounded-[0.78rem] transition-opacity duration-300 hover:opacity-50 justify-center flex items-center cursor-pointer">
          Liên kết với tài khoản MoMo
        </div>
        <div className="mt-3 w-full p-2 bg-white text-black rounded-[0.78rem] transition-opacity duration-300 hover:opacity-50 justify-center flex items-center cursor-pointer">
          Hủy liên kết
        </div>
      </div>

      {/* Main form */}
      <div className={styles.form}>
        <p className={styles.titleTbl}>Số điện thoại đăng kí MoMo</p>
        <div className={styles.inputGroup}>
          <input type="number" placeholder="Nhập số điện thoại đăng kí MoMo" />
          <button className={styles.otpButton}>Gửi OTP</button>
        </div>

        <p className={styles.titleTbl}>Mã OTP</p>
        <div className={styles.inputGroup}>
          <input type="number" placeholder="Nhập mã OTP" />
        </div>

        <p className={styles.titleTbl}>Mã PIN MoMo</p>
        <div className={styles.inputGroup}>
          <input type="password" placeholder="Nhập mã PIN" />
        </div>

        <button className="mt-3 w-full p-2 light-yellow-bg text-white rounded-[0.78rem] transition-opacity duration-300 hover:opacity-50 justify-center flex items-center cursor-pointer">
          Liên kết
        </button>
      </div>

      {/* Logo MOMO */}
      <div className={styles.logoContainer}>
        <img src="/icons/momo-logo.svg" alt="MoMo Logo" className={styles.logo} />
      </div>
    </div>
  );
}

export default Wallet;
