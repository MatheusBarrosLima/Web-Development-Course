export type PropsUserData = {
    name: string;
    avatar_url: string;
    bio: string;
};

export function UserCard({ name, avatar_url, bio }: PropsUserData ) {
    return (
        <div style={{ textAlign: "center"}}>
        <img src={avatar_url} alt="user-image" width={200} />
        <h2>{name}</h2>
        <p>{bio}</p>
      </div>
    )
}