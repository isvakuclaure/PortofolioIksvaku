'use client';
import { useState } from 'react';

// La clave la inyecta el build desde un secret; nunca va escrita en el repo.
// Es pública por diseño: sólo sirve para enviar mensajes, no revela mi dirección.
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? '';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const fieldClass =
  'w-full border border-rule bg-panel px-3.5 py-2.5 text-[15px] text-ink outline-none placeholder:text-ink-soft focus-visible:border-signal-lamp focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-signal-lamp';

const labelClass = 'mb-1.5 block font-mono text-[9.5px] uppercase tracking-[0.14em] text-ink-soft';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus('sending');
    setError('');

    if (!ACCESS_KEY) {
      setStatus('error');
      setError('El formulario todavía no está configurado.');
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message ?? 'El envío no se ha completado.');
      }
      setStatus('sent');
      form.reset();
    } catch (cause) {
      setStatus('error');
      setError(cause instanceof Error ? cause.message : 'El envío no se ha completado.');
    }
  }

  if (status === 'sent') {
    return (
      <div className="border border-rule bg-panel px-6 py-8">
        <p className="inline-flex items-center gap-2 font-mono text-[10.5px] font-medium uppercase tracking-[0.13em] text-live">
          <span aria-hidden className="h-[7px] w-[7px] rounded-full bg-live-lamp" />
          Mensaje enviado
        </p>
        <p className="mt-3 max-w-[46ch] font-prose text-[17px] leading-relaxed text-ink-mid">
          Gracias por escribir. Te contesto en cuanto lo lea — normalmente el mismo día.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-5 cursor-pointer border-b border-signal-lamp pb-0.5 font-mono text-[11px] uppercase tracking-[0.08em] text-ink transition-colors hover:text-signal"
        >
          Escribir otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input type="hidden" name="access_key" value={ACCESS_KEY} />
      <input type="hidden" name="subject" value="Nuevo mensaje desde el portfolio" />
      {/* Trampa para bots: si viene rellenado, Web3Forms lo descarta */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} aria-hidden />

      <div>
        <label className={labelClass} htmlFor="name">
          Nombre
        </label>
        <input id="name" name="name" type="text" required autoComplete="name" placeholder="Tu nombre" className={fieldClass} />
      </div>

      <div>
        <label className={labelClass} htmlFor="reply">
          Cómo te contesto
        </label>
        <input
          id="reply"
          name="reply_to"
          type="text"
          required
          placeholder="Correo o teléfono"
          className={fieldClass}
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="message">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Qué buscas y para cuándo"
          className={`${fieldClass} min-h-24 resize-y`}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="cursor-pointer self-start border border-ink bg-ink px-5 py-3 text-[13px] font-semibold uppercase tracking-[0.04em] text-ground transition-colors hover:border-ink-mid hover:bg-ink-mid disabled:cursor-wait disabled:opacity-60"
      >
        {status === 'sending' ? 'Enviando…' : 'Enviar'}
      </button>

      {status === 'error' && (
        <p role="alert" className="max-w-[46ch] font-mono text-[11px] leading-relaxed text-signal">
          {error}{' '}
          <a
            href="https://linkedin.com/in/iksvaku"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-signal underline-offset-2"
          >
            Escríbeme por LinkedIn
          </a>{' '}
          mientras lo arreglo.
        </p>
      )}

      <p className="font-mono text-[10px] leading-[1.7] tracking-[0.06em] text-ink-soft">
        El formulario envía a través de Web3Forms. Mi correo no aparece en la página ni en el código.
      </p>
    </form>
  );
}
