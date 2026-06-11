function Profile(){
return (
    <img 
    src='this is the url of the image'
    alt='i am practicing React'
    />
);
}

export default function Gallery (){
    return(
        <section>
            <h1>
            This is the image intigration practicing
            </h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    );
}