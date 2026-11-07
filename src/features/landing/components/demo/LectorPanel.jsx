import ButtonLink from '../../../../components/ui/ButtonLink'

const fields = [
  ['Contratante', '[Cliente]'],
  ['Vigencia', '01/12/26 – 01/12/27'],
  ['Forma de pago', 'Trimestral'],
  ['Cobertura', 'GMM'],
]

export default function LectorPanel() {
  return (
    <div className="flex flex-wrap items-center gap-10">
      <div className="flex min-w-0 flex-1 basis-90 flex-col gap-4">
        <h3 className="font-heading text-2xl font-extrabold text-brand">
          De PDF a póliza registrada en segundos
        </h3>
        <p className="text-base leading-relaxed text-ink">
          La IA lee la carátula y llena los campos por ti. Revisas, confirmas con un clic y el
          sistema calcula todos los recibos de la vigencia.
        </p>
        <p className="text-sm leading-relaxed text-ink">
          Funciona con pólizas de cualquier aseguradora, en PDF o foto.
        </p>
      </div>

      <div className="flex min-w-0 flex-1 basis-130 flex-wrap gap-5 rounded-3xl bg-surface p-7">
        <div className="flex min-w-0 flex-1 basis-50 flex-col gap-2.5 rounded-xl bg-white p-5 shadow-lg">
          <div className="h-3 w-3/5 rounded bg-brand" />
          <div className="h-2 w-11/12 rounded bg-lilac-100" />
          <div className="h-2 w-4/5 rounded bg-lilac-100" />
          <div className="h-5.5 w-5/6 rounded bg-highlight" />
          <div className="h-2 w-3/4 rounded bg-lilac-100" />
          <div className="h-5.5 w-3/5 rounded bg-highlight" />
          <div className="h-2 w-11/12 rounded bg-lilac-100" />
          <div className="h-5.5 w-4/5 rounded bg-highlight" />
          <div className="h-2 w-1/2 rounded bg-lilac-100" />
        </div>

        <div className="flex min-w-0 flex-1 basis-55 flex-col gap-2.5">
          {fields.map(([label, value]) => (
            <div
              key={label}
              className="flex justify-between gap-2 rounded-xl bg-white px-3.5 py-3 text-sm"
            >
              <span>{label}</span>
              <strong className="font-semibold text-brand">{value}</strong>
            </div>
          ))}
          <ButtonLink href="#precios" className="min-h-11 px-4 text-sm">
            Confirmar y crear recibos
          </ButtonLink>
        </div>
      </div>
    </div>
  )
}
