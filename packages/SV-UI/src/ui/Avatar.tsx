// eslint-disable-next-line no-redeclare
import * as React from "react";
import { cn } from "../twm";
// eslint-disable-next-line no-redeclare
import Image from "next/image";
import { parseGitAvatar } from "@athenetz-sv/api/other/gh/GitAvatar.js";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface AvatarProps extends React.HTMLAttributes<HTMLImageElement> {
  size?: number;
  username: string;
  placeholder?: boolean;
  links?: boolean;
}

/**
 * Avatar component displays a user's avatar image.
 *
 * @component
 * @example
 * // Usage:
 * <Avatar
 *   username="john_doe"
 *   placeholder={false}
 *   size={100}
 *   className="avatar"
 *   links={true}
 * />
 *
 * @param {object} props - The component props.
 * @param {string} props.username - The username of the user.
 * @param {boolean} [props.placeholder=false] - Determines whether to show a placeholder avatar or not.
 * @param {number} [props.size] - The size of the avatar image in pixels.
 * @param {string} [props.className] - Additional CSS class names for the avatar component.
 * @param {boolean} [props.links=false] - Determines whether to wrap the avatar image with a link or not.
 * @returns {JSX.Element} The Avatar component.
 */
const Avatar: React.FC<AvatarProps> = ({
  username,
  placeholder = false,
  size,
  className,
  links,
  ...props
}) => {
  const [avatarUrl, setAvatarUrl] = React.useState<string | StaticImport>(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUrgu4a7W_OM8LmAuN7Prk8dzWXm7PVB_FmA&s",
  );
  // eslint-disable-next-line no-unused-vars
  const [profileLink, setProfileLink] = React.useState<string | undefined>(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUrgu4a7W_OM8LmAuN7Prk8dzWXm7PVB_FmA&s",
  );
  React.useEffect(() => {
    if (!placeholder) {
      parseGitAvatar(username).then(
        (url: React.SetStateAction<string | StaticImport>) => {
          setAvatarUrl(url);
        },
      );
    }
  });

  // Props here
  switch (placeholder) {
    case true:
      return (
        // Disabled only there because next img needs a src but a placeholder doesnt have one
        <img
          width={size || 100}
          height={size || 100}
          className={cn(
            " rounded-full bg-l-bg/20 dark:bg-d-bg/20 softblur border-4 border-l-prim dark:border-d-prim duration-700",
            className,
          )}
          alt=""
          {...props}
        />
      );
    case false:
      return links ? (
        <a href={profileLink}>
          <Image
            width={size || 100}
            height={size || 100}
            src={avatarUrl}
            alt={"Avatar of " + username}
            className={cn(
              " rounded-full border-4 border-l-prim dark:border-d-prim duration-700",
              className,
            )}
            {...props}
          />
        </a>
      ) : (
        <Image
          width={size || 100}
          height={size || 100}
          src={avatarUrl}
          alt={"Avatar of " + username}
          className={cn(
            " rounded-full border-4 border-l-prim dark:border-d-prim duration-700",
            className,
          )}
          {...props}
        />
      );
  }
};

interface AvatarGroupProps extends React.HTMLAttributes<HTMLImageElement> {
  size?: number;
  limit?: number;
  users: string[];
  holderstyle?: string;
}

/**
 * AvatarGroup component displays a group of avatars with an optional count of hidden users.
 *
 * @param users - An array of usernames to display as avatars.
 * @param limit - The maximum number of avatars to display. Defaults to the length of the `users` array.
 * @param size - The size of each avatar in pixels. Defaults to 100.
 * @param className - Additional CSS class names to apply to the container div.
 * @param holderstyle - Additional inline styles to apply to the container div.
 * @param props - Additional props to pass to the container div.
 * @returns The AvatarGroup component.
 */
const AvatarGroup: React.FC<AvatarGroupProps> = ({
  users,
  limit = users.length,
  size = 100,
  className,
  holderstyle,
  ...props
}) => {
  const visibleUsers = users.slice(0, limit);
  const hiddenUsers = users.length - limit;
  return (
    <div className={holderstyle} {...props}>
      {visibleUsers.map((user, index) => (
        <div
          key={index}
          style={{
            marginLeft: index > 0 ? (size * index) / 2 : 0,
            marginTop: index > 0 ? -size : 0,
          }}
        >
          <Avatar username={user} size={size} />
        </div>
      ))}
      {hiddenUsers > 0 && (
        <div
          className={cn(
            "rounded-full border-2 border-l-prim dark:border-d-prim p-1",
            className,
          )}
          style={{
            zIndex: 0,
            marginLeft: size * (visibleUsers.length - 1),
            transform: `translateY(-${size}px)`, // Fix for Problem 1
            fontSize: size / 3 / 2,
            width: size / 3,
          }}
        >
          +{hiddenUsers}
        </div>
      )}
    </div>
  );
};

export { Avatar, AvatarGroup };
