export const Practice1 = () =>{

  const calcTotalFee = (num:number) =>{
    const total = num * 1.1;
    console.log(total);
    
  }
  const onClickPractice = () => calcTotalFee(1000);
  return (
    <div>
      <p>練習</p>
      <button onClick={onClickPractice}>練習①実行</button>
    </div>
  )
}
