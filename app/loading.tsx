import { Container, Skeleton } from "@/components/ui";

export default function Loading() {
  return (
    <div className="min-h-[60vh]">
      {/* Hero skeleton */}
      <div className="bg-desert-storm py-16 md:py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Skeleton className="h-6 w-32 mx-auto mb-4" />
            <Skeleton className="h-12 w-full max-w-xl mx-auto mb-4" />
            <Skeleton className="h-6 w-full max-w-lg mx-auto" />
          </div>
        </Container>
      </div>

      {/* Content skeleton */}
      <Container className="py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-xl border border-border p-6">
              <Skeleton className="h-12 w-12 rounded-lg mb-4" />
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
