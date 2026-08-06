"use client";

import * as React from "react";

/* Guardado por si volvemos a un mensaje centrado en agentes conversacionales.
   Se retiró de la card de IA porque el copy pasó a hablar de ESTRATEGIA
   ("identifica dónde la IA genera impacto"), y un chat sugiere que solo
   construimos chatbots. Reemplazado por AiStrategyVisual. */

function Stage({ children }: { children: React.ReactNode }) {
  return <div className="relative h-[208px] w-full">{children}</div>;
}

export function AgentChatVisual() {
  return (
    <Stage>
      <div className="flex h-full flex-col justify-center gap-3">
        <div className="max-w-[92%] self-start rounded-2xl rounded-bl-md bg-[#1f3f7a]/60 px-3.5 py-2.5 text-[12px] leading-snug text-white/90 ring-1 ring-inset ring-white/10">
          Hola Ana, tu pedido #4821 sale mañana. ¿Confirmo la dirección de
          siempre?
        </div>
        <div className="max-w-[80%] self-end rounded-2xl rounded-br-md bg-white/[0.16] px-3.5 py-2.5 text-[12px] leading-snug text-white/90 ring-1 ring-inset ring-white/10">
          Sí, por favor. Gracias.
        </div>
      </div>
    </Stage>
  );
}
