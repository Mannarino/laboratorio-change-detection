
# Laboratorio de Angular Change Detection

Este laboratorio está diseñado para experimentar y comprender el funcionamiento del **Change Detection** en Angular. El proyecto contiene varias ramas donde se exploran diferentes configuraciones y comportamientos del Change Detection mediante eventos, funciones asíncronas y la estrategia `OnPush`.

## Ramas del proyecto

### 1. `rama-uno`
En esta rama, los componentes tienen la configuración por defecto de detección de cambios (`ChangeDetectionStrategy.Default`). Esto significa que cualquier evento en la aplicación, como clics o interacciones con formularios, activa el ciclo de detección de cambios de Angular. Además, se puede ver cómo la detección de cambios responde incluso a eventos asíncronos como `setTimeout`.

### 2. `rama-dos`
En esta rama, el componente padre está configurado con la estrategia `OnPush`, lo que optimiza el ciclo de detección de cambios. Esto implica que Angular solo ejecutará el ciclo de detección cuando:
- Se reciba un nuevo valor en las propiedades de entrada (`@Input`).
- Se genere un evento de usuario en la propia rama (clics o interacciones).

Aquí también hay ejemplos de cómo `setTimeout` afecta la detección de cambios dentro de esta rama, pero no desencadena el ciclo cuando los eventos ocurren en un componente padre con `OnPush`. Sin embargo, eventos como clics o salidas de `input` dentro de los componentes hijos en la misma rama activan el ciclo.

### 3. `rama-tres`
Esta rama contiene dos componentes: uno padre y uno hijo, ambos configurados con la estrategia `OnPush`. Se puede observar cómo un clic en un botón del componente padre **no** activa la detección de cambios en el hijo, ya que no se cumplen las condiciones de `OnPush`.

Por otro lado, cuando el clic ocurre en un botón del hijo, **sí** se activa la detección de cambios en el componente padre y en el resto de la aplicación, excepto en los componentes de la `rama-dos`, ya que el padre en esa rama también tiene configurada la estrategia `OnPush`, lo que impide que se detecten los cambios por eventos generados en la `rama-tres`.

### 4. `rama-cuatro`
Esta rama es similar a la `rama-uno`, con la configuración por defecto de detección de cambios, pero añade funciones asíncronas. Cada componente tiene un `setTimeout` que demuestra cómo la detección de cambios reacciona a los cambios que ocurren en diferentes partes de la aplicación, incluso en eventos asíncronos.

Además, ambos componentes tienen un `setInterval` fuera del `NgZone`, lo que significa que no afectan la detección de cambios. Aun así, los `setInterval` siguen mostrando mensajes en la consola para indicar que están funcionando, aunque no disparan el ciclo de detección de cambios.

## Funcionalidades principales a explorar
1. **Eventos sincrónicos y asincrónicos**: Observar cómo los diferentes tipos de eventos afectan la ejecución del ciclo de detección de cambios en Angular.
2. **`ChangeDetectionStrategy.OnPush`**: Examinar cómo esta estrategia optimiza el ciclo de cambios y cuándo se activa la detección.
3. **Fuera de `NgZone`**: Ver cómo funciones asíncronas como `setInterval` no disparan el ciclo de detección cuando están fuera del `NgZone`, mientras que `setTimeout` dentro de la zona sí lo hace.

## Notas

- **`setTimeout` y `setInterval`**: Ambos ejemplos están presentes en las ramas para mostrar el comportamiento de la detección de cambios. Sin embargo, como los `setInterval` están fuera de la zona de Angular, no afectan la vista, pero sí ejecutan mensajes en consola.
- **Eventos de usuario y estrategias `OnPush`**: La estrategia `OnPush` no se activará en los componentes padre a menos que ocurra uno de los eventos que actualizan las propiedades de entrada o eventos de usuario directos (como clics o interacciones).


