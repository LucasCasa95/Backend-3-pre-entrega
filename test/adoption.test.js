import supertest from "supertest";
import chai from "chai"; 

const expect = chai.expect; 
const requester = supertest("http://localhost:8080"); 

describe("Router de Adopciones", () => {
    describe("GET /api/adoptions", () => {
        it("Me debe retornar una lista de adopciones", async () => {
            const {status} = await requester.get("/api/adoptions")

            expect(status).to.equal(200)
        })

        it("Me retorna 404 si la ruta no existe", async () => {
            const {status} = await requester.get("/adoptions/noexiste");
            expect(status).to.equal(404); 
        })

        it("Buscamos que me retorne la info de una adopción existente", async () => {
            let aid = "678009415d2336f0b9a69823"; 

            const {status} = await requester.get(`/api/adoptions/${aid}`); 
            expect(status).to.equal(200); 
        })

        it("Nos deberia retornar 404 si la adopcion no existe", async () => {
            let noExisteAid = "67626d05a3f6fa3a7145f729"; 
            const {status} = await requester.get(`/api/adoptions/${noExisteAid}`); 

            expect(status).to.equal(404);
        })

        it("Vamos a crear una adopción", async () => {
            "/:uid/:pid"

            let uid = "6757099b39d47b3c9a8670e4";
            let pid = "6751e349a92b9bae1042f56f";

            const {status} = await requester.post(`/api/adoptions/${uid}/${pid}`);
            expect(status).to.equal(200);
            
        })

        it("Retorna un error 400 si la mascota ya fue adoptada", async () => {
            let uid = "6757099b39d47b3c9a8670e4";
            let pid = "6751e349a92b9bae1042f56f";

            const {status} = await requester.post(`/api/adoptions/${uid}/${pid}`);
            expect(status).to.equal(400);
        })

        it("Debe retornar error en la adopción si el usuario no existe", async () =>{
            let noexisteuid = "6757099b39d47b3c9a8670e2";
            let pid = "6751e349a92b9bae1042f56f";
            const {status} = await requester.post(`/api/adoptions/${noexisteuid}/${pid}`);
            expect(status).to.equal(400);
        })
        
        it("Debe retornar error en la adopción si la mascota no existe", async () =>{
            let uid = "6757099b39d47b3c9a8670e4";
            let noexistepid = "6751e349a92b9bae1042f57c";
            const {status} = await requester.post(`/api/adoptions/${uid}/${noexistepid}`);
            expect(status).to.equal(404);
        })

        it("Debe retornar 404 si los parámetros son inválidos", async () => {
            const noExisteUid = "6757099b39d47b3c9a8670e9";
            const noExistePid = "6751e349a92b9bae1042f57c";

            const { status} = await requester.post(`/api/adoptions/${noExisteUid}/${noExistePid}`);
            expect(status).to.equal(404);;
        })
    })
})