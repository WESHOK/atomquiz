import Link from "next/link";

export default function quizId({params})
{
      return (
            <div>
                  <h1>ВИКТОРИНА ПО ГОРОДУ: {decodeURI(params.quizId)}</h1>
                  <Link href={'/quiz/' + params.quizId + '/0'}>начать</Link>
            </div>
      )
}