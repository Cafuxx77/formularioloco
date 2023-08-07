import ReviewForm from "./ReviewForm";

export default function ReviewPage(){
    return(
        <div className="mx-auto max-w-2xl px-4 my-10">
            <h1 className="text-4xl font-bold my-20">Cuente su experiencia a los demas</h1>

            <ReviewForm />        
        </div>
    )
}