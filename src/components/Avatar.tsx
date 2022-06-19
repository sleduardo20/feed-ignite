/* eslint-disable react/require-default-props */
import styles from "./Avatar.module.css";

type AvatarProps = {
  src: string;
  hasBorder?: boolean;
};

export function Avatar({ src, hasBorder }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt="avatar"
    />
  );
}
