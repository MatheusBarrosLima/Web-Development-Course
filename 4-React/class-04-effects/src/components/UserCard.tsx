type Data = {
    avatar_url: string;
    name: string;
    bio: string;
};

type Props = {
    data: Data
}

export function UserCard({ data }: Props ) {
    return (
        <div style={{ textAlign: "center"}}>
        <img src={data.avatar_url} alt="user_image" width={200} />
        <h2>{data.name}</h2>
        <p>{data.bio}</p>
      </div>
    )
}