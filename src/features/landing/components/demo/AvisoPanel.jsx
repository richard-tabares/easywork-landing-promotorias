export default function AvisoPanel() {
  return (
    <div className="flex flex-wrap items-center gap-10">
      <div className="flex min-w-0 flex-1 basis-90 flex-col gap-4">
        <h3 className="font-heading text-2xl font-extrabold text-brand">
          El primer aviso lo manda Easywork
        </h3>
        <p className="text-base leading-relaxed text-ink">
          Tu cliente recibe el recordatorio por correo o WhatsApp antes del vencimiento. A tu equipo
          le llega la tarea de seguimiento, ya asignada.
        </p>
      </div>

      <div className="flex min-w-0 flex-1 basis-130 flex-wrap items-start gap-5 rounded-3xl bg-surface p-7">
        <div className="flex min-w-0 flex-1 basis-60 flex-col gap-2.5 rounded-2xl bg-whatsapp-bg p-4.5">
          <span className="text-xs font-semibold text-success">WhatsApp · al cliente</span>
          <div className="rounded-tl-md rounded-tr-2xl rounded-br-2xl rounded-bl-2xl bg-white p-3.5 text-sm leading-relaxed text-ink-chat">
            Hola [Nombre], te recordamos que el recibo de tu póliza de Gastos Médicos vence el 15 de
            diciembre. ¿Te ayudamos con tu pago?
          </div>
        </div>

        <div className="flex min-w-0 flex-1 basis-50 flex-col gap-2.5 rounded-2xl bg-white p-4.5 shadow-lg">
          <span className="text-xs font-semibold text-brand">Tarea creada</span>
          <strong className="text-sm font-semibold text-brand">Dar seguimiento al cobro</strong>
          <span className="text-sm">Responsable: [Agente]</span>
          <span className="text-sm">Fecha: 13 dic</span>
        </div>
      </div>
    </div>
  )
}
