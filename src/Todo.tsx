type Todotype = {
    userId:number;
    title:string;
    completed:boolean;
}


export const Todo = (props: Todotype) => {

  const {title,userId,completed} = props;
  const completedMark = completed ? "[完]" : "[[未]";

  return (
    <p>{`${completedMark}${title}(ユーザー:${userId})`}</p>
  )
}
