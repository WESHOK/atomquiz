import Link from 'next/link';
import json from 'root/questions.json'
import { motion } from "framer-motion"


export default function questionId({params})
{
	return (
		<>
			{
				json.map((a) =>
				{
					if (a.name == decodeURI(params.quizId)) {
						if (+params.questionId <= (a.questions.length-1))
						{
							return (
								<div>
									<h1>{a.name}</h1>
									<h2>{a.questions[+params.questionId].question}</h2>
									<h3>Ответ: {a.questions[+params.questionId].answer}</h3>
									<Link href={'/quiz/' + a.name + '/' + (+params.questionId + 1)}>СЛЕД.</Link>
								</div>
							);
						}
						else
						{
							return (<Link href='/'>ВСЕ!</Link>);
						}
					}
				})
			}
		</>
	);
}