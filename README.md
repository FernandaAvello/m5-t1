## Explica el Uso de Fetch API o Axios para el Consumo de la API

Por ejemplo en le archivo de ListDoctors, la API fetch se utiliza para obtener datos de forma asíncrona desde un archivo JSON que contiene información sobre doctores.
Esta opción fue seleccionada porque:
Permite obtener datos externos: La aplicación necesita mostrar una lista de doctores, y estos datos se almacenan en un archivo JSON externo (doctors.json).
Asincronía: fetch permite realizar solicitudes HTTP de manera asíncrona, lo que significa que la aplicación puede seguir funcionando mientras espera la respuesta del servidor.
```
const fetchDoctors = async () => {
  try {
    const response = await fetch('../../../../data/doctors.json');
    const data = await response.json();
    setDoctors(data);
  } catch (error) {
    console.error("Error fetching doctors:", error);
  }
};
```
1. Definición de la función fetchDoctors
async: La función se define como asíncrona para poder usar await dentro de ella.
await fetch: Se utiliza fetch para realizar una solicitud HTTP GET al archivo JSON. await se usa para esperar la respuesta de la solicitud.
response.json(): Una vez que se recibe la respuesta, se convierte a formato JSON.
setDoctors(data): Los datos obtenidos se almacenan en el estado doctors utilizando el hook setDoctors.

2. Uso de useEffect para llamar a fetchDoctors
```
useEffect(() => {
  fetchDoctors();
}, []);

```
