import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Pruebas del archivo 11-async-await', () => { 
    
    test('getImagen debe de regresar un URL de la imagen', async () => { 
        const url = await getImagen();

        console.log(url);
        expect(typeof url).toBe('string')
     })
 })