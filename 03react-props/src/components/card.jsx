
// eslint-disable-next-line react/prop-types
const Card = ({userName ="SD" , post = "Not assign yet"}) => {
    console.log({userName});
return (
    <div>
    <figure className="md:flex w-[500px] bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.unsplash.com/photo-1702377168432-ac8b5e387998?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
        <p className="text-lg font-medium text-blue-300">
            Tailwind CSS is the only framework that I ve seen scale
            on large teams. It’s easy to customize, adapts to any design,
            and the build size is tiny.
        </p>
        </blockquote>
        <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
            {userName}
        </div>
        <div className="text-slate-700 dark:text-slate-500">
            {post}
        </div>
        </figcaption>
    </div>
    </figure>
    </div>
)
}

export default Card